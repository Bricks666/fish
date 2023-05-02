import type { Address, WithSenderParams } from '@/shared/types';

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

export interface GetShopParams {
	readonly id: number;
}

export interface AddShopParams extends WithSenderParams {
	readonly address: Address;
	readonly login: string;
	readonly name: string;
	readonly city: string;
}

export interface DeleteShopParams extends WithSenderParams {
	readonly shopId: number;
}

export interface GetSalesmenAddressesParams {
	readonly id: number;
}

export interface AddSalesmanParams extends WithSenderParams {
	readonly id: number;
	readonly salesmanAddress: Address;
}

export interface DeleteSalesmanParams extends WithSenderParams {
	readonly id: number;
	readonly salesmanAddress: Address;
}
