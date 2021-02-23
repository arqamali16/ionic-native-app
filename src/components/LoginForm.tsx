import { IonButton, IonRow, IonCol, IonLabel, IonInput, IonItem, IonList } from '@ionic/react';
import React, { useState } from 'react';

const LoginForm: any = (props: any) => {
	const { onSubmit } = props;

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<React.Fragment>
			<IonRow style={{ marginTop: '100px' }}>
				<IonCol>
					<IonList>
						<IonItem>
							<IonLabel position='stacked'>Username</IonLabel>
							<IonInput
								value={username}
								inputmode='email'
								required
								onIonChange={({ detail }: any) => setUsername(detail.value)}
							></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel position='stacked'>Password</IonLabel>
							<IonInput
								value={password}
								type='password'
								required
								onIonChange={({ detail }: any) => setPassword(detail.value)}
							></IonInput>
						</IonItem>
					</IonList>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<IonButton color='success' expand='block' onClick={() => onSubmit({ username, password })}>
						Login
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
		</React.Fragment>
	);
};

export default LoginForm;
