import { toHex } from 'web3-utils';
import { web3Api } from '../web3';
import type {
	AddRequestParams,
	ChangeRequestStatusParams,
	GetRequestParams,
	RequestResponse
} from './types';

export const getRequests = async (): Promise<RequestResponse[]> => {
	return web3Api.contract.methods.getRequests().call();
};

export const getRequest = async (params: GetRequestParams): Promise<RequestResponse> => {
	const { id, } = params;
	return web3Api.contract.methods.requests(id).call();
};

export const addRequest = async (params: AddRequestParams): Promise<void> => {
	const { sender, type, shopAddress = toHex(0), } = params;
	await web3Api.contract.methods.addRequest(type, shopAddress).send({ from: sender, });
};
export const acceptRequest = async (params: ChangeRequestStatusParams): Promise<void> => {
	const { requestId, sender, } = params;
	await web3Api.contract.methods.acceptRequest(requestId).send({ from: sender, });
};

export const cancelRequest = async (params: ChangeRequestStatusParams): Promise<void> => {
	const { requestId, sender, } = params;
	await web3Api.contract.methods.cancelRequest(requestId).send({ from: sender, });
};
