import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
import React from 'react';
import Medison from '../../src/assets/madison.jpg';
import './Home.css';

import PaymentsLogic from '../../src/Logics/Payments';
import { useActions } from 'kea';

const Home: any = () => {
	const {} = useActions(PaymentsLogic);
	return (
		<IonPage style={{ backgroundColor: '#bae637' }}>
			<IonHeader className='header'>
				<IonToolbar className='toolbar'>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonCard>
					<img src={Medison} />
					<IonCardHeader>
						<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
						<IonCardTitle>Card Title</IonCardTitle>
					</IonCardHeader>

					<IonCardContent>
						Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or
						spend a week in the woods. Wash your spirit clean.
					</IonCardContent>
				</IonCard>
				<IonCard>
					<IonItem>
						<IonIcon icon={pin} slot='start' />
						<IonLabel>ion-item in a card, icon left, button right</IonLabel>
						<IonButton fill='outline' slot='end'>
							View
						</IonButton>
					</IonItem>

					<IonCardContent>
						This is content, without any paragraph or header tags, within an ion-cardContent element.
					</IonCardContent>
				</IonCard>
				<IonCard>
					<IonItem href='#' className='ion-activated'>
						<IonIcon icon={wifi} slot='start' />
						<IonLabel>Card Link Item 1 activated</IonLabel>
					</IonItem>

					<IonItem href='#'>
						<IonIcon icon={wine} slot='start' />
						<IonLabel>Card Link Item 2</IonLabel>
					</IonItem>

					<IonItem className='ion-activated'>
						<IonIcon icon={warning} slot='start' />
						<IonLabel>Card Button Item 1 activated</IonLabel>
					</IonItem>

					<IonItem>
						<IonIcon icon={walk} slot='start' />
						<IonLabel>Card Button Item 2</IonLabel>
					</IonItem>
				</IonCard>
				<IonCard>
					<IonItem href='#' className='ion-activated'>
						<IonIcon icon={wifi} slot='start' />
						<IonLabel>Card Link Item 1 activated</IonLabel>
					</IonItem>

					<IonItem href='#'>
						<IonIcon icon={wine} slot='start' />
						<IonLabel>Card Link Item 2</IonLabel>
					</IonItem>

					<IonItem className='ion-activated'>
						<IonIcon icon={warning} slot='start' />
						<IonLabel>Card Button Item 1 activated</IonLabel>
					</IonItem>

					<IonItem>
						<IonIcon icon={walk} slot='start' />
						<IonLabel>Card Button Item 2</IonLabel>
					</IonItem>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default Home;
