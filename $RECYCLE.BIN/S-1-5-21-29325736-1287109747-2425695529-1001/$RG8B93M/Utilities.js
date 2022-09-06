/* eslint-disable no-mixed-spaces-and-tabs */
import ls from "local-storage";
import {NotificationManager} from "react-notifications";

var signupPath = "/signup";
var homePath = "/";

export default class Utilities {

	static async metaMaskAccount(showToast = true) {
		let metaMask = false;
		if(window.web3 !== undefined && window.web3.eth !== undefined)
		{
			let accs = await window.ethereum.request({ method: "eth_requestAccounts" });
			metaMask = accs.length != 0 && accs[0];
			if(!metaMask && (window.location.pathname !==homePath && window.location.pathname !== signupPath))
			{
				if(showToast)
					NotificationManager.warning("You have been logged out due to Metamask Locked!");
				this.logoutAndRedirect();
			}
			if(metaMask && this.getMetamaskAccount()!=null && this.getMetamaskAccount()!=undefined &&this.getMetamaskAccount() !== metaMask){
				NotificationManager.warning("You have been logged out due to Your Metamask account change");
				this.logoutAndRedirect();
				// console.log(ls.get('mmaccount'),metaMask);
			}
		}
		return metaMask;
	}

	static setMetamaskAccount(account) {
		// Saves user token to localStorage
		localStorage.setItem("mmaccount", account);
	}

    static getMetamaskAccount = () => {
    	// Retrieves the user token from localStorage
    	return localStorage.getItem("mmaccount");
    }

    static logoutAndRedirect() {
    	this.logout();
    	setTimeout(() => {
    		if (navigator.userAgent.match(/(mobile)/)) {
    			window.location = homePath;
    		}
    		else {
    			window.location = signupPath;
    		}
    	}, 1500);
    }

    static logout() {
    	sessionStorage.clear();
    	localStorage.clear();
    	ls.clear();        
    }
}