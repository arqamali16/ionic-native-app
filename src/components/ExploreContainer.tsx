import React from 'react';
import './ExploreContainer.css';
import { IonButton, IonIcon, IonContent,IonItem } from '@ionic/react';
import { star } from 'ionicons/icons';

import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;



interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const handleBrowser = async() =>{
    await Browser.open({ url: 'http://capacitorjs.com/',presentationStyle:'popover' });
  }

  return (
    <div style={{marginTop:'130%',padding:'10px'}}>
      <IonButton expand="block" onClick={handleBrowser}>Login</IonButton>
      <IonButton expand="block" fill="outline">Register</IonButton>
    </div>
  );
};

export default ExploreContainer;
