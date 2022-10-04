/* eslint-disable @typescript-eslint/no-unused-vars */
import { EmptyObject } from '@reduxjs/toolkit';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { BaseQueryApi, QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { Eth } from 'web3-eth';
import { CallOptions, Contract, ContractSendMethod, SendOptions } from 'web3-eth-contract';
import { Address } from './types';

const contractRequest = async <
	Args extends Web3Args,
	Result,
	Error = EmptyObject,
	_Extra = EmptyObject,
	Meta = EmptyObject
>(
	contract: Contract,
	args: Args,
	api: BaseQueryApi
) => {
	const { methodName, sender, value, methodArgs = [] } = args;
	const { type } = api;
	const method: ContractSendMethod = contract.methods[methodName](...methodArgs);
	let data: Result | undefined;
	let error: Error | undefined;
	try {
		if (type === 'query') {
			const callOptions: CallOptions = {};
			if (sender) {
				callOptions.from = sender;
			}
			data = await method.call(callOptions);
		} else {
			const sendOptions: SendOptions = {
				from: sender!,
			};
			if (value) {
				sendOptions.value = value;
			}
			await method.send(sendOptions);
			data = true as Result;
		}
	} catch (e) {
		error = e as Error;
		console.log(error);
	}

	console.log(data, error, args);

	return {
		data,
		error,
		meta: undefined,
	} as QueryReturnValue<Result, Error, Meta>;
};

const ethRequest = async <
	Args extends Web3Args,
	Result,
	Error = EmptyObject,
	_Extra = EmptyObject,
	Meta = EmptyObject
>(
	eth: Eth,
	args: Args
) => {
	const { methodName, methodArgs = [] } = args;
	let data: Result | undefined;
	let error: Error | undefined;
	try {
		const method = eth[methodName as keyof Eth];
		if (!method) {
			throw new Error(`${methodName} is not a method of Eth`);
		}
		data = await method(...methodArgs);
	} catch (e) {
		error = e as Error;
	}

	return {
		data,
		error,
		meta: undefined,
	} as QueryReturnValue<Result, Error, Meta>;
};

export type Web3BaseType = 'contract' | 'eth';

export interface Web3Args {
	readonly methodName: string;
	readonly methodArgs?: unknown[];
	readonly type?: Web3BaseType;
	readonly sender?: Address;
	readonly value?: string;
}

export const createWeb3BaseQuery = (contract: Contract, eth: Eth) => {
	return (): BaseQueryFn<Web3Args, unknown, EmptyObject, EmptyObject, EmptyObject> => {
		return async <
			Args extends Web3Args,
			Result,
			Error = EmptyObject,
			_Extra = EmptyObject,
			Meta = EmptyObject
		>(
			args: Args,
			api: BaseQueryApi
		): Promise<QueryReturnValue<Result, Error, Meta>> => {
			const { type = 'contract' } = args;
			switch (type) {
				case 'contract': {
					return contractRequest(contract, args, api);
				}
				case 'eth': {
					return ethRequest(eth, args);
				}
				default: {
					throw new Error('Unknown request type');
				}
			}
		};
	};
};
