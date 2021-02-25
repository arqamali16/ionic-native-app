import { kea } from 'kea';

import api, { getToken } from '../../src/Api';
import LoginLogic from './Login';

const logic = kea({
	path: ['kea', 'payments'],

	connect: { values: [LoginLogic, ['userDetails']] },

	events: ({ actions }) => ({
		afterMount: () => {
			actions.getPayments();
		},
	}),

	actions: {
		getPayments: true,
		setPayments: (payments: any) => ({ payments }),

		addPayment: (paymentDetails: any) => ({ paymentDetails }),
	},

	listeners: ({ actions }) => ({
		getPayments: async () => {
			const headers = { 'x-access-token': await getToken() };
			const { data } = await api.get('/payment', { headers });
			actions.setPayments(data);
		},

		addPayment: async (paymentDetails: any) => {
			try {
				const headers = { 'x-access-token': await getToken() };
				const { data } = await api.post('/payment', { paymentDetails }, { headers });
				actions.setPayments(data);
			} catch (err) {}
		},
	}),

	reducers: {
		payments: [
			[],
			{
				setPayments: (state: any, { payments }: any) => payments,
			},
		],
	},
});

export default logic;
