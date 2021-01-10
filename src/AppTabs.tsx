import React from 'react';
import {  Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabBar, IonTabs, IonTabButton, IonIcon, IonLabel } from '@ionic/react';

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';
import Activity from './pages/Activity';
import { walletOutline,cogOutline,homeOutline,addCircleOutline, documentTextOutline } from 'ionicons/icons';



const AppTab: any = ({loggedIn}:any) => loggedIn ? (
    <IonTabs>
        <IonRouterOutlet>
        <Route path="/private/home" exact={true}>
            <Home/>
        </Route>
        <Route path="/private/wallet" component={Wallet} exact={true} >
              <Wallet/>
        </Route>
        <Route path="/private/settings" component={Settings} exact={true} >
              <Settings/>
        </Route>
        <Route path="/private/activity" component={Activity} exact={true} >
              <Activity/>
        </Route>
        <Redirect from='/' to='/private/home' exact/>
      </IonRouterOutlet>
    <IonTabBar slot="bottom" translucent style={{backgroundColor:'black'}}>
      <IonTabButton tab="home" href='/private/home'>
        <IonIcon icon={homeOutline} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>

      <IonTabButton tab="wallet" href='/private/wallet'>
        <IonIcon icon={walletOutline} />
        <IonLabel>Shahada Wallet</IonLabel>
      </IonTabButton>

      <IonTabButton tab="add-credential" href='/private/add-credential'>
      <IonIcon  icon={addCircleOutline}/>
      <IonLabel>Add Credential</IonLabel>
      </IonTabButton>

      <IonTabButton tab="activity" href='/private/activity'>
        <IonIcon icon={documentTextOutline} />
        <IonLabel>Acitvity</IonLabel>
      </IonTabButton>

      <IonTabButton tab="settings" href='/private/settings'>
        <IonIcon icon={cogOutline} />
        <IonLabel>Settings</IonLabel>
        </IonTabButton>
    </IonTabBar>
  </IonTabs>
):<Redirect to='/login'></Redirect>;

export default AppTab;
