import Cookies from "js-cookie";
const axios = require('axios');

const BASE_URL = 'http://127.0.0.1:4000/api';

const config = async () => {
	const header = {
		headers: {
			"Authorization": 'bearer ' + Cookies.get("auth"),
		}
	}
	return header;
}

const fetchApi = async (endpoint) => {
	const result = await axios.get(BASE_URL + endpoint, await config())
		.catch(err => {
			console.log(err);
		});
	console.log(result);
	return result;
};

const postApi = async (endpoint, values) => {
	const result = await axios.post(BASE_URL + endpoint, values)
		.catch(err => {
			return { status: err.response.status };
		});
	console.log(result);
	return result;
};

export { fetchApi, postApi };