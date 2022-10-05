import { Address } from '@/packages/web3';

export interface Shop {
	readonly id: number;
	readonly address: Address;
	readonly name: string;
	readonly city: string;
}
export interface ShopResponse {
	readonly id: string;
	readonly Address: Address;
	readonly Name: string;
	readonly city: string;
}
