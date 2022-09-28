import Web3 from 'web3';
import {
	BaseQueryApi,
	BaseQueryFn,
	QueryReturnValue,
} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { Contract, ContractSendMethod, EventData } from 'web3-eth-contract';
import { EmptyObject } from '@/interfaces/common';
import { Address } from '@/interfaces/web3';
import { abi, address } from '../data';

export const web3: Web3 = new Web3('ws://localhost:8545');
export const contract: Contract = new web3.eth.Contract(abi, address);
export const { personal } = web3.eth;

export const unlockAccount = async (wallet: string): Promise<void> => {
	await personal.unlockAccount(wallet, '0000', 0);
};
export const lockAccount = async (wallet: string): Promise<void> => {
	await personal.lockAccount(wallet);
};

export interface SubscribeParams {
	readonly event: string;
	readonly callback: Function;
	readonly filter?: object;
}

export const subscribe = (params: SubscribeParams) => {
	const { event, filter, callback } = params;
	return contract.events[event]({ filter }, (error: Error, data: EventData) => {
		if (!error) {
			callback(data.returnValues);
		}
	});
};

export interface ContractArgs {
	readonly methodName: string;
	readonly sender: Address;
	readonly methodArgs: unknown[];
	readonly value?: number | string;
}

export const contractBaseQuery = (): BaseQueryFn<
	ContractArgs,
	unknown,
	EmptyObject,
	EmptyObject,
	EmptyObject
> => {
	return async <
		Args extends ContractArgs,
		Result,
		Error = EmptyObject,
		Extra = EmptyObject,
		Meta = EmptyObject
	>(
		args: Args,
		api: BaseQueryApi,
		options: Extra
	): Promise<QueryReturnValue<Result, Error, Meta>> => {
		const { methodArgs, methodName, sender, value } = args;
		const { type } = api;
		const method: ContractSendMethod = contract.methods[methodName](
			...methodArgs
		);
		let data: Result | undefined;
		let error: Error | undefined;
		try {
			if (type === 'query') {
				data = await method.call({
					from: sender,
				});
			} else {
				await method.send({
					from: sender,
					value,
				});
			}
		} catch (e) {
			error = e as Error;
		}

		console.log(args, api, options);

		return {
			data,
			error,
			meta: undefined,
		} as QueryReturnValue<Result, Error, Meta>;
	};
};
