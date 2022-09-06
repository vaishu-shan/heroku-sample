import Web3 from "web3";
import SCbuttonABI from "../../contracts/SCButtons.json"

export const TransferOwnership = async (newOwner, account) => {
  try {
    // const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
    const web3 = new Web3(window.ethereum);
    const addr = "0xD224fcb9d1f5ab814ddB525E8640e4BDF9F42902";
    const contract = new web3.eth.Contract(SCbuttonABI, addr);
    const transferOwnerHash = await contract.methods.transferOwnership(newOwner).send({ from: account });
    console.log("hashvalues",transferOwnerHash)
    return transferOwnerHash;
  } catch (error) {
    console.error("Failed to get contract", error);
    return null;
  }
};

export const StakefeePercentage = async (_stakeFeePercent,account) => {
  try {
    const web3 = new Web3(window.ethereum);
    const addr = "0xD224fcb9d1f5ab814ddB525E8640e4BDF9F42902";
    const contract = new web3.eth.Contract(SCbuttonABI, addr);
    await contract.methods.setStakeFeePercent(_stakeFeePercent).send({ from: account });
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const FeeCollector = async (FeeCollectorSet,account) => {
  try {
    const web3 = new Web3(window.ethereum);
    const addr = "0xD224fcb9d1f5ab814ddB525E8640e4BDF9F42902";
    const contract = new web3.eth.Contract(SCbuttonABI, addr);
    await contract.methods.setFeeCollector(FeeCollectorSet).send({ from: account });
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const EarlyWithdraw = async (IsEarlyWithdrawAllowedSet,account) => {
  try {
    const web3 = new Web3(window.ethereum);
    const addr = "0xD224fcb9d1f5ab814ddB525E8640e4BDF9F42902";
    const contract = new web3.eth.Contract(SCbuttonABI, addr);
    await contract.methods.setIsEarlyWithdrawAllowed(IsEarlyWithdrawAllowedSet).send({ from: account });
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const  InjectLiquidity = async (_amount,account) => {
  try {
    const web3 = new Web3(window.ethereum);
    const addr = "0xD224fcb9d1f5ab814ddB525E8640e4BDF9F42902";
    const contract = new web3.eth.Contract(SCbuttonABI, addr);
    await contract.methods.injectLiquidity(_amount).send({ from: account });
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const  WithdrawCollectedFees = async (WithdrawFees,account) => {
  try {
    const web3 = new Web3(window.ethereum);
    const addr = "0xD224fcb9d1f5ab814ddB525E8640e4BDF9F42902";
    const contract = new web3.eth.Contract(SCbuttonABI, addr);
    await contract.methods.withdrawCollectedFees(WithdrawFees).send({ from: account });
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const  WithdrawLiquidity = async (_amount,account) => {
  try {
    const web3 = new Web3(window.ethereum);
    const addr = "0xD224fcb9d1f5ab814ddB525E8640e4BDF9F42902";
    const contract = new web3.eth.Contract(SCbuttonABI, addr);
    await contract.methods.withdrawLiquidity(_amount).send({ from: account });
  } catch (error) {
    console.error(error);
    return null;
  }
};

