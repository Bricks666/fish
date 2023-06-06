/* eslint-disable no-redeclare */
import type { Contract } from 'web3-eth-contract';
import { CONTRACT_NAME, ETHER_SERVICE_HOST, abi } from '../config';
import { web3 } from './web3';

let contract: Contract | null = null;

export interface ContractInfo {
	readonly name: string;
	readonly address: string;
}

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

export type AnyParams = Record<string, any>;

export type ContractRequestParams<Params extends AnyParams> = Params & {
	readonly contract: Contract;
};

export interface ContractRequestHandler<Params extends AnyParams, R> {
	(params: ContractRequestParams<Params>): R;
	(params: ContractRequestParams<never>): R;
}

export function createContractRequest<Params extends AnyParams, R>(
	func: (params: ContractRequestParams<Params>) => R
): (params: Params) => R;

export function createContractRequest<R>(
	func: (params: ContractRequestParams<Record<string, never>>) => R
): () => R;

export function createContractRequest(f: any) {
	return (params: any) => {
		if (!contract) {
			throw new Error('Contract was not created. Please, run initContract before');
		}

		if (!params) {
			return f({ contract, });
		}

		return f({ ...params, contract, });
	};
}
