import type { UserResponse } from '@/shared/api';
import type { User } from '../types';
import { isEmptyAddress } from '@/shared/lib';
import { guest } from './config';

export const prepareUser = (user: UserResponse): User => {
	return {
		address: user.Address,
		login: user.login,
		name: user.FIO,
		onRequest: user.onRequest,
		role: Number(user.role),
		shopAddress: user.shopAddress || null,
	};
};

export const mapUser = (user: UserResponse): User => {
	if (isEmptyAddress(user.Address)) {
		throw new Error('Not exists');
	}

	return prepareUser(user);
};

export const getDefaultUser = (): User => {
	return { ...guest };
};
