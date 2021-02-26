import {
	IonCard,
	IonItem,
	IonLabel,
	IonList,
	IonPage,
	IonTitle,
	IonAvatar,
	IonHeader,
	IonContent,
	IonToolbar,
	IonCardTitle,
	IonCardHeader,
	IonCardContent,
	IonCardSubtitle,
	IonChip,
	IonListHeader,
	IonGrid,
	IonRow,
	IonCol,
	IonIcon,
	IonMenu,
	IonButtons,
	IonMenuButton,
	IonButton,
} from '@ionic/react';
import React from 'react';
import moment from 'moment';
import { menuController } from '@ionic/core';
import { checkmarkCircle, helpCircle, cardOutline } from 'ionicons/icons';

import Medison from '../../src/assets/madison.jpg';

import PaymentsLogic from '../../src/Logics/Payments';
import { useActions, useValues } from 'kea';
import _ from 'lodash';

const Home: any = () => {
	const { payments, userDetails } = useValues(PaymentsLogic);
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
				<IonCard>
					<IonCardHeader>
						<IonAvatar slot='start'>
							<img src='https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' />
						</IonAvatar>
						<IonCardSubtitle>Welcome</IonCardSubtitle>
						<IonCardTitle>{userDetails.name}</IonCardTitle>
						<IonCardSubtitle>{userDetails.email}</IonCardSubtitle>
					</IonCardHeader>
				</IonCard>
				<IonList>
					<IonListHeader>Recent Payments</IonListHeader>
					{_.map(payments, (eachPayment) => (
						<IonCard>
							<IonItem>
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
													style={{ float: 'left' }}
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
		</>
	);
};

export default Home;
