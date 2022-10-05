import { UserResponse } from '@/interfaces/response';
import { User } from './types';

export const converter = (user: UserResponse): User => {
	return {
		login: user.login,
		address: user.Address,
		name: user.FIO,
		role: +user.role,
		shopAddress: user.shopAddress,
		onRequest: user.onRequest,
	};
};
