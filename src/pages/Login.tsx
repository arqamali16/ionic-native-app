import { IonPage, IonRow, IonCol, IonAlert, IonLoading, IonText, IonGrid, IonIcon } from '@ionic/react';
import React from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from '../../src/components/LoginForm';

import LoginLogic from '../../src/Logics/Login';
import { useActions, useValues } from 'kea';
import { book } from 'ionicons/icons';

/**
 * Function rendering Login Component
 * @param props {Object}
 */
const Login: React.FC = () => {
	/**
	 * Actions resoponsible for storing login states
	 */
	const { login } = useActions(LoginLogic);

	/**
	 * Login states from redux
	 */
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
