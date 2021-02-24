import _ from 'lodash';
import axios from 'axios';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const environment = {
	baseUrl: '',
};

environment.baseUrl = 'https://investabook-server.herokuapp.com/';

export const getToken = async () => {
	const data = await Storage.get({ key: 'token' });
	return _.get(data, 'value', null);
};

export default axios.create({
	baseURL: environment.baseUrl,
	responseType: 'json',
});
