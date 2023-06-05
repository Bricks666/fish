import Web3 from 'web3';
import type { Contract, EventData } from 'web3-eth-contract';
import { abi, CONTRACT_NAME, ETHER_SERVICE_HOST, NETWORK_HOST, NETWORK_PORT } from '../../config';
import type { Address } from '../../types';
import type { ContractInfo, SubscribeData, SubscribeParams } from './types';

const networkPath = `${NETWORK_HOST}:${NETWORK_PORT}`;

export const web3: Web3 = new Web3(networkPath);
// eslint-disable-next-line import/no-mutable-exports
export let contract: Contract | null = null;
export const { personal, } = web3.eth;

export const initContract = async () => {
	const path = `${ETHER_SERVICE_HOST}/contracts/${CONTRACT_NAME}`;
	const response = await fetch(path, {
		mode: 'cors',
	});

	if (!response.ok) {
		throw await response.json();
	}

	const info: ContractInfo = await response.json();
	const { address, } = info;
	contract = new web3.eth.Contract(abi, address);
	return true;
};

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
