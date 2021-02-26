import { IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import PaymentForm from '../components/PaymentForm';

import PaymentLogic from '../../src/Logics/Payments';
import { useActions, useValues } from 'kea';

const AddPayment: React.FC = () => {
	const { addPayment } = useActions(PaymentLogic);
	const { paymentLoding } = useValues(PaymentLogic);

	const handleSubmit = (paymentDetails: any) => {
		addPayment(paymentDetails);
	};

	return (
		<IonPage>
			<IonHeader className='header'>
				<IonToolbar>
					<IonTitle>Add Payment</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<PaymentForm onSubmit={handleSubmit} />
			</IonContent>
			<IonLoading cssClass='my-custom-class' isOpen={paymentLoding} message={'Please wait...'} />
		</IonPage>
	);
};

export default AddPayment;
