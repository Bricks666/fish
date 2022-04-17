import { contract, web3 } from "./core";

export const getAddressesApi = async () => {
	return await web3.eth.getAccounts();
};

export const getUserAddressApi = async () => {
	return await contract.methods.getUsersAddresses().call();
};
