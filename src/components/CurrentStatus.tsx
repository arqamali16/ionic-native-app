import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonRow } from '@ionic/react';
import moment from 'moment';
import React from 'react';

const startDate = moment('08-03-2021', 'DD-MM-YYYY').format('YYYY-MM-DD');
const startRent = 19420;

const currentRent = (startRent * 10 * moment().diff(startDate, 'years')) / 100 + startRent;
const currentRentEnd = `Jan ${moment().add(1, 'year').format('YYYY')}`;

const nextRent = (currentRent * 10) / 100 + currentRent;
const nextRentStart = `Feb ${moment().add(1, 'year').format('YYYY')}`;

const CurrentStatus = () => {
	return (
		<IonRow className='current-status-card'>
			<IonCol>
				<IonCard className='current-year-card'>
					<IonCardHeader>
						<IonCardSubtitle>Current Rent:</IonCardSubtitle>
						<IonCardTitle className='black-font'>&#8377; {currentRent}</IonCardTitle>
					</IonCardHeader>
					<IonCardHeader>
						<IonCardSubtitle>End Date:</IonCardSubtitle>
						<IonCardTitle className='black-font'>{currentRentEnd}</IonCardTitle>
					</IonCardHeader>
				</IonCard>
			</IonCol>
			<IonCol>
				<IonCard className='next-year-card'>
					<IonCardHeader>
						<IonCardSubtitle>Next Rent:</IonCardSubtitle>
						<IonCardTitle className='black-font'>&#8377; {nextRent}</IonCardTitle>
					</IonCardHeader>
					<IonCardHeader>
						<IonCardSubtitle>Start Date:</IonCardSubtitle>
						<IonCardTitle className='black-font'>{nextRentStart}</IonCardTitle>
					</IonCardHeader>
				</IonCard>
			</IonCol>
		</IonRow>
	);
};

export default CurrentStatus;
