import {
	IonContent,
	IonPage,
	IonButton,
	IonRow,
	IonCol,
	IonLabel,
	IonInput,
	IonItem,
	IonList,
	IonAlert,
	IonLoading,
} from '@ionic/react';
import React from 'react';
import { Plugins } from '@capacitor/core';
import './Home.css';
import { Redirect } from 'react-router-dom';
import ShahadaLogo from '../assets/shahada-logo.svg';

import LoginForm from '../../src/components/LoginForm';

import LoginLogic from '../../src/Logics/Login';
import { useActions, useValues } from 'kea';

const { Browser } = Plugins;

const Login: any = () => {
	const { login } = useActions(LoginLogic);
	const { isLoggedIn, loginError, loginLoading } = useValues(LoginLogic);

	return isLoggedIn ? (
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
				<LoginForm onSubmit={(details: any) => login(details)} />
			</IonContent>
			{loginError && (
				<IonAlert
					isOpen={true}
					// onDidDismiss={() => setShowAlert1(false)}
					cssClass='my-custom-class'
					header={'Alert'}
					subHeader={'Login failed!'}
					message={'Please recheck the user credentials'}
					buttons={['OK']}
				/>
			)}

			<IonLoading cssClass='my-custom-class' isOpen={loginLoading} message={'Please wait...'} />
		</IonPage>
	);
};

export default Login;
