import { Address } from '@old/packages/web3';

export interface Request {
	readonly id: number;
	readonly type: number;
	readonly sender: Address;
	readonly currentRole: number;
	readonly newRole: number;
	readonly status: number;
	readonly shopAddress?: Address;
}

export interface RequestResponse {
	readonly id: string;
	readonly requestType: number;
	readonly senderAddress: Address;
	readonly currentRole: number;
	readonly newRole: number;
	readonly status: number;
	readonly shopAddress?: Address;
}

export interface AddRequestParams {
	readonly sender: Address;
	readonly type: number;
	readonly shopAddress?: Address;
}

export interface ChangeRequestStatusParams {
	readonly sender: Address;
	readonly requestId: number;
}
