import { Address } from '@/packages/web3';
import { RequestResponse } from './types';

export const filterMyRequests = (
	requests: RequestResponse[],
	address: Address
): RequestResponse[] => {
	return requests.filter((request) => request.senderAddress === address);
};
