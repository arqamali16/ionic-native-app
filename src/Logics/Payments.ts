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

	defaults: {
		paymentLoding: false,
	},

	actions: {
		getPayments: true,
		setPayments: (payments: any) => ({ payments }),

		addPayment: (paymentDetails: any) => ({ paymentDetails }),

		unsetLoding: true,
	},

	listeners: ({ actions }) => ({
		getPayments: async () => {
			const headers = { 'x-access-token': await getToken() };
			const { data } = await api.get('/payment', { headers });
			actions.setPayments(data);
		},

		addPayment: async ({ paymentDetails }: any) => {
			console.log(paymentDetails);
			try {
				const headers = { 'x-access-token': await getToken() };
				const { data } = await api.post('/payment', { ...paymentDetails, approved: true }, { headers });
				actions.unsetLoding(data);
			} catch (err) {}
		},
	}),

	reducers: {
		paymentLoding: {
			addPayment: () => true,
			unsetLoding: () => false,
		},
		payments: [
			[],
			{
				setPayments: (state: any, { payments }: any) => payments,
			},
		],
	},
});

export default logic;
