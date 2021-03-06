import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabBar, IonTabs, IonTabButton, IonIcon, IonLabel } from '@ionic/react';

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';
import Activity from './pages/Activity';
import AddPayment from './pages/AddPayment';
import { walletOutline, cogOutline, homeOutline, addCircleOutline, documentTextOutline } from 'ionicons/icons';

import LoginLogic from '../src/Logics/Login';
import { useValues } from 'kea';

const AppTab: any = () => {
	const { isLoggedIn } = useValues(LoginLogic);
	return isLoggedIn ? (
		<IonTabs>
			<IonRouterOutlet>
				<Route path='/private/home' exact={true}>
					<Home />
				</Route>
				<Route path='/private/settings' exact={true}>
					<Settings />
				</Route>
				<Route path='/private/activity' exact={true}>
					<Activity />
				</Route>
				<Route path='/private/add-payment' exact={true}>
					<AddPayment />
				</Route>
				<Redirect from='/' to='/private/home' exact />
			</IonRouterOutlet>
			<IonTabBar slot='bottom' translucent className='tab-bar-styling'>
				<IonTabButton tab='home' href='/private/home'>
					<IonIcon icon={homeOutline} />
					<IonLabel>Home</IonLabel>
				</IonTabButton>

				<IonTabButton tab='add-payment' href='/private/add-payment'>
					<IonIcon icon={addCircleOutline} />
					<IonLabel>Add Payment</IonLabel>
				</IonTabButton>

				<IonTabButton tab='activity' href='/private/activity'>
					<IonIcon icon={documentTextOutline} />
					<IonLabel>Acitvity</IonLabel>
				</IonTabButton>

				<IonTabButton tab='settings' href='/private/settings'>
					<IonIcon icon={cogOutline} />
					<IonLabel>Settings</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	) : (
		<Redirect to='/login'></Redirect>
	);
};

export default AppTab;
