import { createContractRequest } from '../contract';
import type { UserResponse } from '../users';
import type {
	GetShopParams,
	ShopResponse,
	AddShopParams,
	GetSalesmenAddressesParams,
	DeleteShopParams,
	AddSalesmanParams,
	DeleteSalesmanParams
} from './types';

export const getShop = createContractRequest<GetShopParams, Promise<ShopResponse>>(
	async (params) => {
		const { id, contract, } = params;
		return contract.methods.shops(id).call();
	}
);

export const getShops = createContractRequest<Promise<ShopResponse[]>>(async (params) => {
	const { contract, } = params;
	return contract.methods.getShops().call();
});

export const addShop = createContractRequest<AddShopParams, Promise<void>>(async (params) => {
	const { city, login, sender, address, name, contract, } = params;
	await contract.methods.addShop(address, login, name, city).send({ from: sender, });
});

export const deleteShop = createContractRequest<DeleteShopParams, Promise<void>>(async (params) => {
	const { sender, shopId, contract, } = params;
	await contract.methods.deleteShop(shopId).send({ from: sender, });
});

export const getSalesmen = createContractRequest<
	GetSalesmenAddressesParams,
	Promise<UserResponse[]>
>(async (params) => {
	const { id, contract, } = params;
	return contract.methods.getSalesmen(id).call();
});

export const addSalesman = createContractRequest<AddSalesmanParams, Promise<void>>(
	async (params) => {
		const { id, salesmanAddress, sender, contract, } = params;
		return contract.methods.addSalesman(id, salesmanAddress).send({ from: sender, });
	}
);

export const deleteSalesman = createContractRequest<DeleteSalesmanParams, Promise<void>>(
	async (params) => {
		const { id, salesmanAddress, sender, contract, } = params;
		return contract.methods.deleteSalesman(id, salesmanAddress).send({ from: sender, });
	}
);
