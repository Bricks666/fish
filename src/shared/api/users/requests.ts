import type { Address } from '@/shared/types';
import { createContractRequest } from '../contract';
import type { GetUserParams, UserResponse } from './types';

export const getUserAddress = createContractRequest<Promise<Address[]>>(async (params) => {
	const { contract, } = params;
	return contract.methods.getUsersAddresses().call();
});

export const getUser = createContractRequest<GetUserParams, Promise<UserResponse>>(
	async (params) => {
		const { address, contract, } = params;
		return contract.methods.users(address).call();
	}
);
