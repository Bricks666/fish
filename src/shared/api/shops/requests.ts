import { web3Api } from '../web3';
import type {
	GetShopParams,
	ShopResponse,
	AddShopParams,
	GetSalesmenAddressesParams,
	DeleteShopParams
} from './types';

export const getShop = async (params: GetShopParams): Promise<ShopResponse> => {
	const { id, } = params;
	return web3Api.contract.methods.shops(id).call();
};

export const getShops = async (): Promise<ShopResponse[]> => {
	return web3Api.contract.methods.getShops().call();
};

export const addShop = async (params: AddShopParams): Promise<void> => {
	const { city, login, sender, address, name, } = params;
	await web3Api.contract.methods.addShop(address, login, name, city).send({ from: sender, });
};

export const deleteShop = async (params: DeleteShopParams): Promise<void> => {
	const { sender, shopId, } = params;
	await web3Api.contract.methods.deleteShop(shopId).send({ from: sender, });
};

export const getSalesmenAddresses = async (
	params: GetSalesmenAddressesParams
): Promise<string[]> => {
	const { id, } = params;
	return web3Api.contract.methods.getSalesmen(id).call();
};
