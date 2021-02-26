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
	IonText,
	IonGrid,
} from '@ionic/react';
import React from 'react';
import { Plugins } from '@capacitor/core';
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
		<IonPage className='login-background'>
			<IonGrid>
				<IonRow style={{ marginTop: '150px', height: '70%' }}>
					<IonCol size='12'>
						<IonText color='secondary' className='brand-margin'>
							<h1 className='brand-margin'>INVESTABOOK</h1>
						</IonText>
					</IonCol>

					<LoginForm onSubmit={(details: any) => login(details)} />
				</IonRow>
			</IonGrid>
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
