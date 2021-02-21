import React from 'react';
import _ from 'lodash';
import axios from 'axios';

const environment = {
	baseUrl: '',
};

environment.baseUrl = 'https://investabook-server.herokuapp.com/';

/**
 * @function getToken function to get the token from local storage
 */
export const getHeaders = () => {
	return { 'x-access-token': localStorage.getItem('token') };
};

export default axios.create({
	baseURL: environment.baseUrl,
	responseType: 'json',
	headers: {
		'x-access-token': null,
	},
});
