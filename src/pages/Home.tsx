import {
	IonCard,
	IonItem,
	IonLabel,
	IonList,
	IonTitle,
	IonHeader,
	IonContent,
	IonToolbar,
	IonChip,
	IonListHeader,
	IonGrid,
	IonRow,
	IonCol,
	IonIcon,
	IonButtons,
	IonMenuButton,
	IonLoading,
} from '@ionic/react';
import React from 'react';
import moment from 'moment';
import { menuController } from '@ionic/core';
import { cardOutline } from 'ionicons/icons';

import CurrentStatus from '../../src/components/CurrentStatus';
import PaymentsLogic from '../../src/Logics/Payments';
import { useValues } from 'kea';
import _ from 'lodash';

const Home: any = () => {
	const { payments, paymentLoding } = useValues(PaymentsLogic);
	return (
		<>
			<IonHeader className='header'>
				<IonToolbar className='toolbar'>
					<IonButtons slot='start'>
						<IonMenuButton
							color='dark'
							autoHide={false}
							onClick={() => menuController.open()}
						></IonMenuButton>
					</IonButtons>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<CurrentStatus />
				<IonList>
					<IonListHeader>Recent Payments</IonListHeader>
					{_.map(payments, (eachPayment, index) => (
						<IonCard key={index}>
							<IonItem key={index}>
								<IonIcon
									icon={cardOutline}
									style={{
										color: eachPayment.approved ? '#bae637' : '#ffa39e',
										fontSize: '40px',
									}}
								></IonIcon>

								<IonLabel>
									<IonGrid>
										<IonRow>
											<IonCol size='7'>
												<h2 style={{ fontWeight: 400 }}>
													{moment(eachPayment.paid_on).format('DD MMMM YYYY')}
												</h2>
												<h3>{eachPayment.amount}</h3>
												<p>{eachPayment.mode}</p>
											</IonCol>
											<IonCol>
												<IonChip
													color={eachPayment.approved ? 'success' : 'danger'}
													className='float-left'
												>
													<IonLabel>{eachPayment.approved ? 'PAID' : 'PENDING'}</IonLabel>
												</IonChip>
											</IonCol>
										</IonRow>
									</IonGrid>
								</IonLabel>
							</IonItem>
						</IonCard>
					))}
				</IonList>
			</IonContent>
			<IonLoading cssClass='my-custom-class' isOpen={paymentLoding} message={'Please wait...'} />
		</>
	);
};

export default Home;
