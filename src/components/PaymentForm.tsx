import {
	IonLabel,
	IonInput,
	IonItem,
	IonList,
	IonSelect,
	IonSelectOption,
	IonTextarea,
	IonButton,
	IonDatetime,
} from '@ionic/react';
import React, { PureComponent } from 'react';

interface IProps {
	onSubmit: (paymentDetails: any) => void;
}

class PaymentForm extends PureComponent<IProps> {
	state = {
		tenant_id: '',
		paid_on: '',
		amount: 0,
		mode: '',
		description: '',
	};

	handleSubmit = () => {
		this.props.onSubmit(this.state);
		this.setState({
			tenant_id: '',
			paid_on: '',
			amount: 0,
			mode: '',
			description: '',
		});
	};

	render() {
		return (
			<IonList>
				<IonItem>
					<IonLabel>Tenant</IonLabel>
					<IonInput
						value={this.state.tenant_id}
						onIonChange={(e) => this.setState({ tenant_id: e.detail.value })}
						placeholder='0'
						clearInput
					></IonInput>
				</IonItem>
				<IonItem>
					<IonLabel>Date of Payment</IonLabel>
					<IonDatetime
						// displayFormat='MMM DD YYYY'
						placeholder='Select Date'
						value={this.state.paid_on}
						onIonChange={(e) => this.setState({ paid_on: e.detail.value })}
					></IonDatetime>
				</IonItem>

				<IonItem>
					<IonLabel>Amount</IonLabel>
					<IonInput
						type='number'
						placeholder='0.00'
						value={this.state.amount}
						onIonChange={(e) => this.setState({ amount: e.detail.value })}
						clearInput
					></IonInput>
				</IonItem>
				<IonItem>
					<IonLabel>Mode of Payment</IonLabel>
					<IonSelect value={this.state.mode} onIonChange={(e) => this.setState({ mode: e.detail.value })}>
						<IonSelectOption value='Cash'>Cash</IonSelectOption>
						<IonSelectOption value='Cheque'>Cheque</IonSelectOption>
						<IonSelectOption value='Bank Transfer'>Bank Transfer</IonSelectOption>
					</IonSelect>
				</IonItem>
				<IonItem>
					<IonLabel>Description</IonLabel>
					<IonTextarea
						value={this.state.description}
						onIonChange={(e) => this.setState({ description: e.detail.value })}
					></IonTextarea>
				</IonItem>
				<IonButton color='primary' expand='block' onClick={this.handleSubmit} style={{ margin: '15px' }}>
					Add
				</IonButton>
			</IonList>
		);
	}
}

export default PaymentForm;
