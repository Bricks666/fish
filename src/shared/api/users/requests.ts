import type { Address } from '@/shared/types';
import { web3Api } from '../web3';
import type { GetUserParams, UserResponse } from './types';

export const getUserAddress = async (): Promise<Address[]> => {
	return web3Api.contract.methods.getUsersAddresses().call();
};

export const getUser = async (params: GetUserParams): Promise<UserResponse> => {
	const { address } = params;
	return web3Api.contract.methods.users(address).call();
};
