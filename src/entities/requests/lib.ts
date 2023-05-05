import type { RequestResponse } from '@/shared/api';
import type { Request } from './types';

export const prepareRequest = (request: RequestResponse): Request => {
	return {
		id: Number(request.id),
		currentRole: Number(request.currentRole),
		newRole: Number(request.newRole),
		sender: request.senderAddress,
		status: Number(request.status),
		type: Number(request.requestType),
		shopAddress: request.shopAddress ?? null,
	};
};
