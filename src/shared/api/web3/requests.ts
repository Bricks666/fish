import Web3 from 'web3';
import { NETWORK_HOST, NETWORK_PORT } from '../../config';
import type { Address } from '../../types';

const networkPath = `${NETWORK_HOST}:${NETWORK_PORT}`;

export const web3: Web3 = new Web3(networkPath);

const { personal, } = web3.eth;
export const unlockAccount = async (
	wallet: Address,
	password = '0000',
	time = 0
): Promise<void> => {
	await personal.unlockAccount(wallet, password, time);
};
export const lockAccount = async (wallet: Address): Promise<void> => {
	await personal.lockAccount(wallet);
};

export const getAddresses = async (): Promise<Address[]> => {
	return web3.eth.getAccounts();
};

export const getBalance = async (address: Address): Promise<string> => {
	return web3.eth.getBalance(address);
};
