import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
// import ExploreContainer from '../components/ExploreContainer';
// import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
      <IonPage>
      <IonHeader className='header'>
        <IonToolbar>
          <IonTitle>Activity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
