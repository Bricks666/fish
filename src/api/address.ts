import { Address } from '@/interfaces/web3';
import { contract, web3 } from './core';

export const getAddressesApi = async (): Promise<Address[]> => {
	return web3.eth.getAccounts();
};

export const getUserAddressApi = async (): Promise<Address[]> => {
	return contract.methods.getUsersAddresses().call();
};
