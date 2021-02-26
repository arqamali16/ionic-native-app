import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonApp, IonMenu, IonHeader, IonToolbar, IonMenuButton, IonPage } from '@ionic/react';
import { menuController } from '@ionic/core';
import '../src/index.css';

import { IonReactRouter } from '@ionic/react-router';
import AppTab from './AppTabs';
import Login from './pages/Login';
import { getToken } from '../src/Api';

const App: React.FC = () => {
	menuController.enable(true);
	return (
		<IonApp>
			<IonMenu side='end' contentId='main-content' type='overlay'>
				<IonHeader>
					<IonToolbar color='secondary'>
						<IonMenuButton slot='end' color='primary' />
					</IonToolbar>
				</IonHeader>
				<div>Hi</div>
			</IonMenu>
			<IonPage id='main-content'>
				<IonReactRouter>
					<IonRouterOutlet>
						<Route path='/login' exact>
							<Login />
						</Route>
						<Route path='/private'>
							<AppTab />
						</Route>
						<Redirect from='/' to='/private/home' exact />
					</IonRouterOutlet>
				</IonReactRouter>
			</IonPage>
		</IonApp>
	);
};

export default App;
