import React, { useState, useEffect, useContext, createContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ls from "local-storage";
import axios from "axios";
import { setLoggedIn } from "../reducer/userSlice";
import { DEFAULT_URL } from "../utils/APIManager";
import { NotificationManager } from "react-notifications";


const authContext = createContext();

export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
	return useContext(authContext);
};

function useProvideAuth() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [user, setUser] = useState(null);


	const signin = async (token) => {
		const loginData = {
			"username": token,
			"accountid": token
		};
		try {
			const response = await fetch(DEFAULT_URL.loginUrl,
				{
					method: "POST",
					headers: {
						"Accept": "application/json, text/plain, */*",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(loginData)
				});
			console.log("response.status:", response.status);
			console.log(response);

			if (!response.ok) {
				if (response.status === 401) {
					NotificationManager.warning("You haven't registered yet, please signup first");
				}
				throw new Error(`Error! status: ${response.status}`);
			}
			ls.set("user_id ");
			const result = await response.json();
			if (response.status == 200) {
				localStorage.setItem("authToken", result.authToken)
				console.log("authToken", result.authToken);
				fetchData();
			}
			return result;

		} catch (err) {
			console.log(err);
		}
	}

	const signup = async (token) => {
		const postData = {
			"user_name": token,
			"account_id": token,
			"email": ""
		};
		try {
			const response = await fetch(DEFAULT_URL.registerUrl,
				{
					method: "POST",
					headers: {
						"Accept": "application/json, text/plain, */*",
						"Content-Type": "application/json;charset=UTF-8",
					},
					body: JSON.stringify(postData)
				});
			console.log("response.status:", response.status);
			console.log(response);

			if (!response.ok) {
				if (response.status === 500) {
					NotificationManager.warning("User already found in the same wallet address");
				}
				throw new Error(`Error! status: ${response.status}`);
			}

			const result = await response.json();
			if (response.status == 200) {
				localStorage.setItem("authToken", result.authToken)
				console.log("authToken", result.authToken);
				fetchData();
			}
			return result;

		} catch (err) {
			console.log(err);
		}
	}


	const signout = () => {
		localStorage.clear();
		dispatch(setLoggedIn(false));
		navigate("/");
	};

	const getUser = async () => {
		return new Promise((resolve, reject) => {
			const authToken = ls.get("authToken");
			axios.get(DEFAULT_URL.userUrl, {
				headers: {
					"Accept": "application/json, text/plain, */*",
					"Content-Type": "application/json;charset=UTF-8",
					"x-coinfantasy-auth": authToken,
				}
			}).then(res => {
				resolve(res.data.data);
			}).catch(err => {
				reject(err);
			});
		});
	};

	const fetchData = async () => {
		try {
			const user = await getUser();
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		} catch (e) {
			if (e.response.status === 403) {
				signout();
			}
		}
	};

	// Subscribe to user on mount
	useEffect(() => {
		fetchData();

		window.ethereum.on("accountsChanged", (accounts) => {
			console.log("Accounts Changed event received")
			if (accounts && accounts[0]) {
				console.log(accounts)
			} else {
				signout()
				return;
			}
		});
	}, []);

	// Return the user object and auth methods
	return {
		user,
		fetchData,
		signin,
		signup,
		signout,
	};
}