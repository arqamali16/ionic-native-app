import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import PaymentForm from '../components/PaymentForm';

const AddPayment: React.FC = () => {
	const handleSubmit = (paymentDetails: any) => {
		console.log(paymentDetails);
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
		</IonPage>
	);
};

export default AddPayment;
