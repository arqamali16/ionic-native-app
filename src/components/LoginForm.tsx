import { IonButton, IonRow, IonCol, IonLabel, IonInput, IonItem, IonList } from '@ionic/react';
import React, { useState } from 'react';

const LoginForm: any = (props: any) => {
	const { onSubmit } = props;

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<React.Fragment>
			<IonCol size='12'>
				<IonItem>
					<IonInput
						placeholder='Username'
						value={username}
						inputmode='email'
						required
						onIonChange={({ detail }: any) => setUsername(detail.value)}
					></IonInput>
				</IonItem>
				<br />
				<br />
				<IonItem>
					<IonInput
						placeholder='Password'
						value={password}
						type='password'
						required
						onIonChange={({ detail }: any) => setPassword(detail.value)}
					></IonInput>
				</IonItem>
				<br />
				<br />
				<br />
				<IonButton
					color='dark'
					class='button-margin'
					expand='block'
					onClick={() => onSubmit({ username, password })}
				>
					Login
				</IonButton>
				<br />
				<IonButton expand='block' fill='clear' color='dark'>
					Not Registered ?
				</IonButton>
			</IonCol>
		</React.Fragment>
	);
};

export default LoginForm;
