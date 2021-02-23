import _ from 'lodash';
import axios from 'axios';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const environment = {
	baseUrl: '',
};

environment.baseUrl = 'https://investabook-server.herokuapp.com/';

const getToken = async () => await Storage.get({ key: 'token' });

export default axios.create({
	baseURL: environment.baseUrl,
	responseType: 'json',
	headers: {
		'x-access-token': getToken(),
	},
});
