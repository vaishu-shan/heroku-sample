/* eslint-disable no-unused-vars */
import ls from "local-storage";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/game/` ;

const DEFAULT_BASE_URL = process.env.REACT_APP_BASE_URL || "http://3.226.121.17:3001";

export const LOGINURL = DEFAULT_BASE_URL + "auth/login";

export const DEFAULT_URL = {

	loginUrl: `${DEFAULT_BASE_URL}/auth/login`,
	registerUrl: `${DEFAULT_BASE_URL}/auth/register`,
	userUrl: `${DEFAULT_BASE_URL}/user`,
	globalStaticUrl:`${DEFAULT_BASE_URL}/user/stats`,
	
};


export default class APIManager {
	static RestApiCall = (api_url, param) => {
		const authToken = ls.get("authToken");
		return new Promise((resolve, reject) => {
			fetch(BASE_URL + api_url, {
				method: "POST",
				headers: {
					"Accept": "application/json, text/plain, */*",
					"Content-Type": "application/json;charset=UTF-8",
					"x-coinfantasy-auth": authToken
				},
				body: JSON.stringify(param)
			})
				.then(res => res.json())
				.then(response => {
					resolve(response.data);
				})
				.catch(err => {
					console.log(err);
					reject(err);
				});
		});
	};

	static RestApiGetCall = (api_url) => {
		const authToken = ls.get("authToken");
		
		return new Promise((resolve, reject) => {
			fetch(BASE_URL + api_url, {
				method: "GET",
				headers: {
					"Accept": "application/json, text/plain, */*",
					"Content-Type": "application/json;charset=UTF-8",
					"x-coinfantasy-auth": authToken
				}
			})
				.then(res => res.json())
				.then(response => {
					resolve(response.data || []);
				})
				.catch(err => {
					console.log(err);
					reject(err);
				});
		});
	};
}


