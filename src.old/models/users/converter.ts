import { User, UserResponse } from './types';

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
