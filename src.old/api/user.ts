import { UserResponse } from '@old/interfaces/response';
import { Address } from '@old/packages/web3';
import { contract } from './core';

export const getUserApi = async (address: Address): Promise<UserResponse> => {
	return contract.methods.users(address).call();
};
