import type { UserResponse } from '@/shared/api';
import type { User } from './types';

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
