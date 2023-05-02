/* eslint-disable @typescript-eslint/no-unused-vars */
import { Contract, EventData } from 'web3-eth-contract';
import Web3 from 'web3';
import { Address, createWeb3BaseQuery } from '@old/packages/web3';
import { abi } from '../data';

const networkPath = `${process.env.REACT_APP_NETWORK_HOST}:${process.env.REACT_APP_NETWORK_PORT}`;

export const web3: Web3 = new Web3(networkPath);
export const contract: Contract = new web3.eth.Contract(
	abi,
	process.env.REACT_APP_CONTRACT_ADDRESS
);
export const { personal, } = web3.eth;

export const unlockAccount = async (wallet: Address): Promise<void> => {
	await personal.unlockAccount(wallet, '0000', 0);
};
export const lockAccount = async (wallet: Address): Promise<void> => {
	await personal.lockAccount(wallet);
};

export type SubscribeData = EventData['returnValues'];

export type SubscribeCallback<T extends SubscribeData> = (value: T) => unknown;

export interface SubscribeParams<T extends SubscribeData> {
	readonly event: string;
	readonly callback: SubscribeCallback<T>;
	readonly filter?: object;
}

export const subscribe = <T extends SubscribeData>(params: SubscribeParams<T>) => {
	const { event, filter, callback, } = params;
	return contract.events[event]({ filter, }, (error: Error, data: EventData) => {
		if (!error) {
			callback(data.returnValues as T);
		}
	});
};

export const web3BaseQuery = createWeb3BaseQuery(contract, web3.eth);
