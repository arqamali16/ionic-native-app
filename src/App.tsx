import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonApp } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import AppTab from './AppTabs';
import Login from './pages/Login';

const App: React.FC = () => {
	const [loggedIn, setLogin] = useState(false);
	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path='/login' exact>
						<Login loggedIn={loggedIn} onLogin={() => setLogin(true)} />
					</Route>
					<Route path='/private'>
						<AppTab loggedIn={loggedIn} />
					</Route>
					<Redirect from='/' to='/private/home' exact />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
