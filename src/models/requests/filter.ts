import { RequestResponse } from '@/interfaces/response';
import { Address } from '@/packages/web3';

export const filterMyRequests = (
	requests: RequestResponse[],
	address: Address
): RequestResponse[] => {
	return requests.filter((request) => request.senderAddress === address);
};
