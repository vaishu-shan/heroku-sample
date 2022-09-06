/* eslint-disable no-async-promise-executor */
import CFStaking from "../contracts/CFStaking.json";
import CFGame from "../contracts/CFGame.json";
import EthStakingNative from "../contracts/CFStakingNative.json";
import EthGameNative from "../contracts/CFGameNative.json";
import CFToken from "../contracts/CoinFantasy.json";
import Utils from "./Utilities";

export default class ABIManager {
	static GameContract(poolID, cAddress) {
		return new Promise(async (resolve, reject) => {
			let account = await Utils.metaMaskAccount();
			if (account) {
				try {
					// poolID is directly mapped with switch case; poolID => game_pools.id
					switch (poolID) {
					case 1:
						resolve(new window.web3.eth.Contract(CFGame.abi, cAddress));
						break;
					case 2:
						resolve(new window.web3.eth.Contract(EthGameNative.abi, cAddress));
						break;
					default:
						resolve(new window.web3.eth.Contract(CFGame.abi, cAddress));
						break;
					}
				} catch (err) {
					reject(err);
				}
			}
			reject("Metamask not connected");
		});
	}

	static StakingContract(poolID, cAddress) {
		return new Promise(async (resolve, reject) => {
			let account = await Utils.metaMaskAccount();
			if (account) {
				try {
					// poolID is directly mapped with switch case; poolID => game_pools.id
					switch (poolID) {
					case 1:
						resolve(new window.web3.eth.Contract(CFStaking.abi, cAddress));
						break;
					case 2:
						resolve(new window.web3.eth.Contract(EthStakingNative, cAddress));
						break;
					default:
						resolve(new window.web3.eth.Contract(CFStaking.abi, cAddress));
						break;
					}
				} catch (err) {
					reject(err);
				}
			}
			reject("Metamask not connected");
		});
	}

	static TokenContract(poolId, cAddress) {
		return new Promise(async (resolve, reject) => {
			let account = await Utils.metaMaskAccount();
			if (account) {
				try {
					// poolID is directly mapped with switch case; poolID => game_pools.id
					switch (poolId) {
					case 1:
						resolve(new window.web3.eth.Contract(CFToken.abi, cAddress));
						break;
					case 2:
						resolve(new window.web3.eth.Contract(CFToken.abi, cAddress));
						break;
					default:
						break;
					}
				} catch (err) {
					reject(err);
				}
			}
			reject("Metamask not connected");
		});
	}
}
