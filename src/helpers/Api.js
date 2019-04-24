import Axios from 'axios';

const Api = Axios.create({
	baseURL: 'https://api.football-data.org/v2/competitions/',
	headers: {
		'X-Auth-Token': 'c81bc280fbc74ec7a919980d977d1100'
	}
});

export const Get = (route) => {
	return Api.get(route);
};
