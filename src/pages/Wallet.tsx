import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader className='header'>
				<IonToolbar>
					<IonTitle>Wallet</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>{/* <ExploreContainer /> */}</IonContent>
		</IonPage>
	);
};

export default Home;
