import { toHex } from 'web3-utils';
import { RequestResponse } from '@/interfaces/response';
import { Address } from '@/interfaces/web3';
import { contract } from './core';

export const getRequestsApi = async (): Promise<RequestResponse[]> => {
	return contract.methods.getRequests().call();
};

export const getRequestApi = async (id: number): Promise<RequestResponse> => {
	return contract.methods.requests(id).call();
};

export const addRequestApi = async (
	address: Address,
	type: number,
	shopAddress = toHex(0)
): Promise<void> => {
	await contract.methods.addRequest(type, shopAddress).send({ from: address });
};
export const acceptRequestApi = async (
	address: Address,
	requestId: number
): Promise<void> => {
	await contract.methods.acceptRequest(requestId).send({ from: address });
};

export const cancelRequestApi = async (
	address: Address,
	requestId: number
): Promise<void> => {
	await contract.methods.cancelRequest(requestId).send({ from: address });
};
