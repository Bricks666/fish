import { MutationRequestParams } from '@old/interfaces/model';
import { Address } from '@old/packages/web3';

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
	readonly shopId: number;
}

export interface DeleteShopParams extends MutationRequestParams {
	readonly shopId: number;
}

export interface CreateShopParams extends MutationRequestParams {
	readonly shopAddress: Address;
	readonly login: string;
	readonly shopName: string;
	readonly city: string;
}
