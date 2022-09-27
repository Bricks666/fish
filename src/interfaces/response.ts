import { RequestType, Role, Status } from '@/consts';
import { Address } from './web3';

export interface UserResponse {
	readonly login: string;
	readonly Address: Address;
	readonly password: any;
	readonly FIO: string;
	readonly role: Role;
	readonly onRequest: boolean;
	readonly shopAddress?: Address;
}

export interface ShopResponse {
	readonly id: string;
	readonly Address: Address;
	readonly Name: string;
	readonly city: string;
	readonly shopers: Address[];
}

export interface RequestResponse {
	readonly id: string;
	readonly requestType: RequestType;
	readonly senderAddress: Address;
	readonly currentRole: Role;
	readonly newRole: Role;
	readonly status: Status;
	readonly shopAddress?: Address;
}

export interface ReviewResponse {
	readonly id: string;
	readonly text: string;
	readonly subjectAddress: Address;
	readonly mark: string;
	readonly likes: Address[];
	readonly dislikes: Address[];
}

export interface CommentResponse {
	readonly id: string;
	readonly reviewId: string;
	readonly text: string;
	readonly subjectAddress: Address;
}
