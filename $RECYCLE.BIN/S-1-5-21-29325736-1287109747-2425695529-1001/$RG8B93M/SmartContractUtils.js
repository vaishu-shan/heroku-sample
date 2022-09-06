/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
import Utils from "./Utilities";
import { NotificationManager } from "react-notifications";
import ABIManager from "./ABIManager";

const tokenAddress = "0xA8aFB84b5Ce47D8C2bDe26c7f02533FaBA76e3c9";

export default class SmartContractUtils {
	static async stakeFunds(stakeAmount, poolID, cAddress) {
		try {
			let account = await Utils.metaMaskAccount();
			if (account) {
				if (parseFloat(stakeAmount) <= 0) {
					return NotificationManager.warning("Stake Amount should be greater than zero");
				}
				const stakingContract = await ABIManager.StakingContract(poolID, cAddress);
				const cfTokenContract = await ABIManager.TokenContract(poolID, tokenAddress);
				if (this.isNativePool(poolID)) {
					await stakingContract.methods
						.stakeEnjin()
						.send({
							from: account,
							value: window.web3.utils.toWei(parseFloat(stakeAmount).toString(), "ether")
						});
				} else {
					await cfTokenContract.methods.approve(cAddress, window.web3.utils.toWei(parseFloat(stakeAmount).toString(), "ether"))
						.send({
							from: account
						});
					await stakingContract.methods.stakeEnjin(window.web3.utils.toWei(parseFloat(stakeAmount).toString(), "ether"))
						.send({
							from: account
						});
				}
			}
		} catch (err) {
			console.log("Error occurred, while Staking the Funds");
			throw err;
		}
	}

	static async unstakeFunds(unstakeAmount, poolID, cAddress) {
		try {
			let account = await Utils.metaMaskAccount();
			if (account) {
				if (parseFloat(unstakeAmount) <= 0) {
					return NotificationManager.warning("Stake Amount should be greater than zero");
				}

				const stakingContract = await ABIManager.StakingContract(poolID, cAddress);
				await stakingContract.methods
					.unstakeEnjin(window.web3.utils.toWei(parseFloat(unstakeAmount).toString(), "ether"))
					.send({
						from: account
					});
			}
		} catch (err) {
			console.log("Error occurred, while UnStaking the Funds");
			throw err;
		}
	}

	static async getStakeBalance(poolID, cAddress) {
		try {
			let account = await Utils.metaMaskAccount();
			if (account) {
				const stakingContract = await ABIManager.StakingContract(poolID, cAddress);
				const stakingInfo = await stakingContract.methods.stakingInfo(account).call();
				let balance = stakingInfo.activeAmt;
				return parseFloat(web3.utils.fromWei(balance, "ether")).toFixed(2);
			}
		} catch (err) {
			throw err;
		}
	}

	static async getTokenBalance(poolID) {
		try {
			let account = await Utils.metaMaskAccount();
			if (account) {
				const cfTokenContract = await ABIManager.TokenContract(poolID, tokenAddress);
				const balance = await cfTokenContract.methods.balanceOf(account).call();
				return parseFloat(web3.utils.fromWei(balance, "ether")).toFixed(2);
			}
		} catch (err) {
			throw err;
		}
	}

	static async isWhiteListedAccount(poolID, cAddress) {
		try {
			let account = await Utils.metaMaskAccount();
			if (account) {
				const stakingContract = await ABIManager.StakingContract(poolID, cAddress);
				const isWhiteListed = await stakingContract.methods.checkWhiteList(account).call();
				return isWhiteListed;
			}
		} catch (err) {
			throw err;
		}
	}

	static async createGame(gameID, minSize, noOfWinners, lockUpAmount, entryFee, poolID, gameCAddress, stakeCAddress) {
		try {
			let account = await Utils.metaMaskAccount();
			if (account) {
				let gameContract = await ABIManager.GameContract(poolID, gameCAddress);
				await gameContract.methods.initiateGame(
					7,                      // numberOfCoins
					14400,                  // _gameTime,
					60,                     // _waitTime
					parseInt(minSize),      // _numPlayers
					parseInt(noOfWinners),  // _numberOfWinners
					lockUpAmount,           // _lockIn
					entryFee,               // _playerContribution
					parseInt(gameID),       // _gameID
					stakeCAddress           // _staking_contract_address
				).send({
					from: account
				});
			}
		} catch (err) {
			throw err;
		}
	}

	static async joinGame(gameID, poolID, cAddress) {
		try {
			let account = await Utils.metaMaskAccount();
			if (account) {
				let gameContract = await ABIManager.GameContract(poolID, cAddress);
				await gameContract.methods
					.joinGame(parseInt(gameID))
					.send({
						from: account
					});
			}
		} catch (err) {
			throw err;
		}
	}

	static async approveToken(poolID, amount, cAddress) {
		try {
			let account = await Utils.metaMaskAccount();
			if (account) {
				const cfTokenContract = await ABIManager.TokenContract(poolID, tokenAddress);
				await cfTokenContract.methods
					.approve(cAddress, amount)
					.send({
						from: account
					});
			}
		} catch (err) {
			throw err;
		}
	}

    static isNativePool = (poolID) => {
    	return poolID === 2;
    }
}