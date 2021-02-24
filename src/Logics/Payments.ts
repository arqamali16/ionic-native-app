import { kea } from 'kea';

import api, { getToken } from '../../src/Api';

const logic = kea({
	events: ({ actions }) => ({
		afterMount: () => {
			actions.getPayments();
		},
	}),

	actions: {
		getPayments: true,
	},

	listeners: ({ actions }) => ({
		getPayments: async () => {
			const headers = { 'x-access-token': await getToken() };
			const { data } = await api.get('/payment', { headers });
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
