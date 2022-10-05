import { Address } from '@/packages/web3';

export interface UserResponse {
	readonly login: string;
	readonly Address: Address;
	readonly password: any;
	readonly FIO: string;
	readonly role: number;
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
