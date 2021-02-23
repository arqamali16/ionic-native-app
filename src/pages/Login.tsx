import { IonContent, IonPage, IonButton, IonRow, IonCol, IonLabel, IonInput, IonItem, IonList } from '@ionic/react';
import React from 'react';
import { Plugins } from '@capacitor/core';
import './Home.css';
import { Redirect } from 'react-router-dom';
import ShahadaLogo from '../assets/shahada-logo.svg';

import LoginForm from '../../src/components/LoginForm';

import LoginLogic from '../../src/Logics/Login';
import { useActions } from 'kea';

const { Browser } = Plugins;

const Login: any = ({ loggedIn, onLogin }: any) => {
	const { login } = useActions(LoginLogic);

	return loggedIn ? (
		<Redirect to='/private/home' />
	) : (
		<IonPage style={{ backgroundColor: '#bae637' }}>
			<IonContent fullscreen>
				<IonRow style={{ marginTop: '200px' }}>
					<IonCol>
						{/* <IonAvatar> */}
						<img src={ShahadaLogo} style={{ maxWidth: '40%', marginLeft: '30%' }} />
						{/* </IonAvatar> */}
					</IonCol>
				</IonRow>

				<LoginForm onSubmit={login} />
			</IonContent>
		</IonPage>
	);
};

export default Login;
