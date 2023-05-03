import { toHex } from 'web3-utils';
import { authApi, usersApi, type LoginParams, type RegistrationParams } from '@/shared/api';
import { isEmptyUser } from '@/shared/lib';
import { defineStore } from 'pinia';
import { reactive } from 'vue';
import type { User } from '../types';
import { ROLES } from '@/shared/config';

export const AUTH_USER_STORE = 'AUTH_USER_STORE';

const guest: User = {
	address: toHex(0),
	login: 'Guest',
	name: 'Guest',
	onRequest: false,
	role: ROLES.GUEST,
	shopAddress: null,
};

export const useAuthUserStore = defineStore(AUTH_USER_STORE, () => {
	const user = reactive<User>({ ...guest });

	const login = async (params: LoginParams) => {
		await authApi.login(params);
		const maybeUser = await usersApi.getUser({ address: params.address });

		if (isEmptyUser(maybeUser)) {
			throw new Error('Not exists');
		}

		Object.assign(user, maybeUser);
	};

	const registration = async (params: RegistrationParams) => {
		await authApi.registration(params);
	};

	return { user, registration, login };
});
