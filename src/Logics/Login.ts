import { kea } from 'kea';
import { Plugins } from '@capacitor/core';

import api from '../../src/Api';

const { Storage } = Plugins;
const logic = kea({
	actions: {
		login: (loginDetails: any) => ({ loginDetails }),
	},
	listeners: ({ actions }) => ({
		login: async ({ loginDetails }: any) => {
			const { username, password } = loginDetails;
			const { data } = await api.post('/auth/login', { email: username, password });
			await Storage.set({ key: 'token', value: data.token });
		},
	}),
	reducers: {
		users: [
			[],
			{
				setUsers: (state: any, { users }: any) => users,
			},
		],
	},
});

export default logic;
