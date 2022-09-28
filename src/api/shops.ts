import { contract } from './core';

export const getShopAddressesApi = async () => {
	return contract.methods.getShopsAddresses().call();
};
export const getShopApi = async (address) => {
	return contract.methods.shops(address).call();
};

export const addShopApi = async (address, shopAddress, login, name, city) => {
	return contract.methods
		.addShop(shopAddress, login, name, city)
		.send({ from: address });
};

export const deleteShopApi = async (address, shopAddress) => {
	return contract.methods.deleteShop(shopAddress).send({ from: address });
};

export const getSalesmenAddressesApi = async (address) => {
	return contract.methods.getShopShopers(address).call();
};
