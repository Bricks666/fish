import {
	FetchArgs,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import Web3 from 'web3';
import { Contract, EventData } from 'web3-eth-contract';
import { Personal } from 'web3-eth-personal';
import { abi, address } from '../data';

export const web3: Web3 = new Web3('ws://localhost:8545');
export const contract: Contract = new Contract(abi, address);
export const personal = new Personal();

export const unlockAccount = async (wallet: string): Promise<void> => {
	await personal.unlockAccount(wallet, '0000', 0);
};
export const lockAccount = async (wallet: string): Promise<void> => {
	await personal.lockAccount(wallet);
};

export interface SubscribeParams {
	readonly event: string;
	readonly callback: Function;
	readonly filter: object;
}

export const subscribe = (params: SubscribeParams) => {
	const { event, filter, callback } = params;
	return contract.events[event]({ filter }, (error: Error, data: EventData) => {
		if (!error) {
			callback(data.returnValues);
		}
	});
};

export const contractBaseQuery = (): BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError,
	{},
	FetchBaseQueryMeta
> => {
	return (args, api, options) => {
		console.log(args, api, options);

		return Promise.resolve;
	};
};
