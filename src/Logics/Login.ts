import { kea } from 'kea';
import { Plugins } from '@capacitor/core';

import api from '../../src/Api';

const { Storage } = Plugins;
const logic = kea({
	path: ['kea', 'login'],
	defaults: {
		isLoggedIn: false,
	},

	actions: {
		login: (loginDetails: any) => ({ loginDetails }),
		setLoggedIn: true,
	},
	listeners: ({ actions }) => ({
		login: async ({ loginDetails }: any) => {
			const headers = { 'x-access-token': null };
			const { username, password } = loginDetails;
			const { data } = await api.post('/auth/login', { email: username, password }, { headers });
			await Storage.set({ key: 'token', value: data.token });
			if (data.token) {
				actions.setLoggedIn();
			}
		},
	}),
	reducers: {
		isLoggedIn: {
			setLoggedIn: () => true,
		},
		users: [
			[],
			{
				setUsers: (state: any, { users }: any) => users,
			},
		],
	},
});

export default logic;
