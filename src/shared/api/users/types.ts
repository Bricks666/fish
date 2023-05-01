import type { Address } from '@/shared/types';

export interface UserResponse {
	readonly login: string;
	readonly Address: Address;
	readonly password: string;
	readonly FIO: string;
	readonly role: number;
	readonly onRequest: boolean;
	readonly shopAddress?: Address;
}

export interface GetUserParams {
	readonly address: Address;
}
