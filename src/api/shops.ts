import { ShopResponse } from '@/interfaces/response';
import { Address } from '@/packages/web3';
import { contract } from './core';

export const getShopAddressesApi = async (): Promise<string[]> => {
	return contract.methods.getShopsAddresses().call();
};
export const getShopApi = async (address: Address): Promise<ShopResponse> => {
	return contract.methods.shops(address).call();
};

export const addShopApi = async (
	address: Address,
	shopAddress: Address,
	login: string,
	name: string,
	city: string
): Promise<void> => {
	await contract.methods.addShop(shopAddress, login, name, city).send({ from: address });
};

export const deleteShopApi = async (address: Address, shopAddress: Address): Promise<void> => {
	await contract.methods.deleteShop(shopAddress).send({ from: address });
};

export const getSalesmenAddressesApi = async (address: Address): Promise<string[]> => {
	return contract.methods.getShopShopers(address).call();
};
