import { toHex } from 'web3-utils';
import { createContractRequest } from '../contract';
import type {
	AddRequestParams,
	ChangeRequestStatusParams,
	GetRequestParams,
	RequestResponse
} from './types';

export const getRequests = createContractRequest<Promise<RequestResponse[]>>(async (params) => {
	const { contract, } = params;
	return contract.methods.getRequests().call();
});

export const getRequest = createContractRequest<GetRequestParams, Promise<RequestResponse>>(
	async (params) => {
		const { id, contract, } = params;
		return contract.methods.requests(id).call();
	}
);

export const addRequest = createContractRequest<AddRequestParams, Promise<void>>(async (params) => {
	const { sender, type, contract, shopAddress = toHex(0), } = params;
	await contract.methods.addRequest(type, shopAddress).send({ from: sender, });
});
export const acceptRequest = createContractRequest<ChangeRequestStatusParams, Promise<void>>(
	async (params) => {
		const { requestId, sender, contract, } = params;
		await contract.methods.acceptRequest(requestId).send({ from: sender, });
	}
);

export const cancelRequest = createContractRequest<ChangeRequestStatusParams, Promise<void>>(
	async (params) => {
		const { requestId, sender, contract, } = params;
		await contract.methods.cancelRequest(requestId).send({ from: sender, });
	}
);
