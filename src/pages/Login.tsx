import {
	IonContent,
	IonPage,
	IonButton,
	IonText,
	IonRow,
	IonCol,
	IonItemDivider,
	IonLabel,
	IonInput,
	IonItem,
	IonList,
	IonAvatar,
} from '@ionic/react';
import React from 'react';
import { Plugins } from '@capacitor/core';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Redirect } from 'react-router-dom';
import ShahadaLogo from '../assets/shahada-logo.svg';

const { Browser } = Plugins;

const Login: any = ({ loggedIn, onLogin }: any) => {
	const openWebView = async () => {
		await Browser.open({ url: 'https://selfcare.uaepass.ae/auth/login', presentationStyle: 'popover' });
	};

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

				<IonRow style={{ marginTop: '100px' }}>
					<IonCol>
						<IonList>
							<IonItem>
								<IonLabel position='stacked'>Username</IonLabel>
								<IonInput value={''}></IonInput>
							</IonItem>
							<IonItem>
								<IonLabel position='stacked'>Password</IonLabel>
								<IonInput value={''}></IonInput>
							</IonItem>
						</IonList>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonButton color='success' expand='block' onClick={onLogin}>
							Login
						</IonButton>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonButton expand='block' fill='outline' onClick={openWebView}>
							Login with UAE Pass
						</IonButton>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonButton expand='block' fill='clear'>
							Not Registered ?
						</IonButton>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	);
};

export default Login;
