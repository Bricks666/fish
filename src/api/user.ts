import { UserResponse } from '@/interfaces/response';
import { Address } from '@/interfaces/web3';
import { contract } from './core';

export const getUserApi = async (address: Address): Promise<UserResponse> => {
	return contract.methods.users(address).call();
};
