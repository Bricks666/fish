import Web3 from 'web3';
import type { Contract, EventData } from 'web3-eth-contract';
import { abi, CONTRACT, NETWORK_HOST, NETWORK_PORT } from '../../config';
import type { Address } from '../../types';
import type { SubscribeData, SubscribeParams } from './types';

const networkPath = `${NETWORK_HOST}:${NETWORK_PORT}`;

export const web3: Web3 = new Web3(networkPath);
export const contract: Contract = new web3.eth.Contract(abi, CONTRACT);
export const { personal, } = web3.eth;

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

export const subscribe = <T extends SubscribeData>(params: SubscribeParams<T>) => {
	const { event, filter, callback, } = params;
	return contract.events[event]({ filter, }, (error: Error, data: EventData) => {
		if (!error) {
			callback(data.returnValues as T);
		}
	});
};
