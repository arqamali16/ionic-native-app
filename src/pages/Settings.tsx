import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
// import ExploreContainer from '../components/ExploreContainer';
// import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
	console.log('settings');
	return (
		<IonPage>
			<IonHeader className='header'>
				<IonToolbar>
					<IonTitle>Settings</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>{/* <ExploreContainer /> */}</IonContent>
		</IonPage>
	);
};

export default Home;
