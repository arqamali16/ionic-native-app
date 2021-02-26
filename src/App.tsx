import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonApp } from '@ionic/react';
import '../src/index.css';

import { IonReactRouter } from '@ionic/react-router';
import AppTab from './AppTabs';
import Login from './pages/Login';
import { getToken } from '../src/Api';

const App: React.FC = () => {
	return (
		<IonApp>
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
		</IonApp>
	);
};

export default App;
