import { RequestResponse } from '@/interfaces/response';
import { Address } from '@/interfaces/web3';

export const filterMyRequests = (
	requests: RequestResponse[],
	address: Address
) => {
	return requests.filter((request) => request.senderAddress === address);
};
