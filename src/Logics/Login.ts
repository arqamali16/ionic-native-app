import { kea } from 'kea';
import { Plugins } from '@capacitor/core';

import api from '../../src/Api';

const { Storage } = Plugins;
const logic = kea({
	path: ['kea', 'login'],
	defaults: {
		isLoggedIn: false,
		loginError: false,
		loginLoading: false,
	},

	actions: {
		login: (loginDetails: any) => ({ loginDetails }),
		setLoggedIn: (userDetails: any) => ({ userDetails }),
		setLoginError: true,
	},

	listeners: ({ actions }) => ({
		login: async ({ loginDetails }: any) => {
			const headers = { 'x-access-token': null };
			const { username, password } = loginDetails;
			try {
				const { data } = await api.post('/auth/login', { email: username, password }, { headers });
				await Storage.set({ key: 'token', value: data.token });
				if (data.token) {
					actions.setLoggedIn(data.userDetails);
				} else actions.setLoginError();
			} catch (err) {
				actions.setLoginError();
			}
		},
	}),

	reducers: {
		isLoggedIn: {
			setLoggedIn: () => true,
			setLoginError: () => false,
		},
		loginError: {
			setLoginError: () => true,
		},
		loginLoading: {
			login: () => true,
			setLoggedIn: () => false,
			setLoginError: () => false,
		},
		userDetails: [
			{},
			{
				setLoggedIn: (state: any, { userDetails }: any) => userDetails,
			},
		],
		users: [
			[],
			{
				setUsers: (state: any, { users }: any) => users,
			},
		],
	},
});

export default logic;
