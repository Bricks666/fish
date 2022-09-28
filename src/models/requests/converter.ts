import { RequestResponse } from '@/interfaces/response';
import { Request } from './types';

export const converter = (request: RequestResponse): Request => {
	return {
		id: +request.id,
		type: +request.requestType,
		sender: request.senderAddress,
		currentRole: +request.currentRole,
		newRole: +request.newRole,
		status: +request.status,
		shopAddress: request.shopAddress,
	};
};
