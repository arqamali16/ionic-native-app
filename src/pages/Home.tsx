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
} from '@ionic/react';
import React from 'react';
import moment from 'moment';

import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
import Medison from '../../src/assets/madison.jpg';

import PaymentsLogic from '../../src/Logics/Payments';
import { useActions, useValues } from 'kea';
import _ from 'lodash';

const Home: any = () => {
	const { payments, userDetails } = useValues(PaymentsLogic);
	console.log(userDetails);
	return (
		<IonPage style={{ backgroundColor: '#bae637' }}>
			<IonHeader className='header'>
				<IonToolbar className='toolbar'>
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
					{/* <IonCardContent>
						Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or
						spend a week in the woods. Wash your spirit clean.
					</IonCardContent> */}
				</IonCard>
				<IonList>
					{_.map(payments, (eachPayment) => (
						<IonItem>
							<IonAvatar slot='start'>
								<img src='https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' />
							</IonAvatar>
							<IonLabel>
								<h3>{moment(eachPayment.paid_on).format('MMM Do YY')}</h3>
								<h3>{eachPayment.amount}</h3>
								<IonChip color={eachPayment.approved ? 'success' : 'danger'}>
									<IonLabel>{eachPayment.approved ? 'Paid' : 'Pending'}</IonLabel>
								</IonChip>
								<h2>{eachPayment.mode}</h2>
							</IonLabel>
						</IonItem>
					))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Home;
