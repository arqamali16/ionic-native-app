import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonRow } from '@ionic/react';
import moment from 'moment';
import React from 'react';

const startDate = moment('08-03-2021', 'DD-MM-YYYY').format('MMMM Do YYYY');
const startRent = 18500;

console.log(moment().diff(startDate, 'years'));

const currentRent = (startRent * 10 * moment().diff(startDate, 'years')) / 100;
const currentRentEnd = `31st Jan ${moment(startDate).add(1, 'year').format('YYYY')}`;

const CurrentStatus = () => {
	return (
		<IonRow className='current-status-card'>
			<IonCol>
				<IonCard className='current-year-card'>
					<IonCardHeader>
						<IonCardSubtitle>Current Rent:</IonCardSubtitle>
						<IonCardTitle>&#8377; {currentRent}</IonCardTitle>
					</IonCardHeader>
					<IonCardHeader>
						<IonCardSubtitle>Current Rent End:</IonCardSubtitle>
						<IonCardTitle>{currentRentEnd}</IonCardTitle>
					</IonCardHeader>
				</IonCard>
			</IonCol>
			<IonCol>
				<IonCard className='next-year-card'>
					<IonCardHeader>
						<IonCardSubtitle>Current Rent:</IonCardSubtitle>
						<IonCardTitle>&#8377; 18500</IonCardTitle>
					</IonCardHeader>
					<IonCardHeader>
						<IonCardSubtitle>Next Rent Start:</IonCardSubtitle>
						<IonCardTitle>March</IonCardTitle>
					</IonCardHeader>
				</IonCard>
			</IonCol>
		</IonRow>
	);
};

export default CurrentStatus;
