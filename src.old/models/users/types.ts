import { Address } from '@old/packages/web3';

export interface User {
	readonly login: string;
	readonly address: Address;
	readonly name: string;
	readonly role: number;
	readonly onRequest: boolean;
	readonly shopAddress?: Address | null;
}

export interface UserResponse {
	readonly login: string;
	readonly Address: Address;
	readonly password: string;
	readonly FIO: string;
	readonly role: number;
	readonly onRequest: boolean;
	readonly shopAddress?: Address;
}

export interface GetSalesmenParams {
	readonly shopId: number;
}

export interface GetSalesmanParams {
	readonly shopId: number;
	readonly salesmanId: number;
}
