import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import { toHex } from 'web3-utils';
import { authApi, usersApi, type LoginParams, type RegistrationParams } from '@/shared/api';
import { ROLES } from '@/shared/config';
import { isEmptyAddress } from '@/shared/lib';
import type { User } from '../types';

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

	const isAuth = computed(() => user.role !== ROLES.GUEST);

	const login = async (params: LoginParams) => {
		await authApi.login(params);
		const maybeUser = await usersApi.getUser({ address: params.address });

		if (isEmptyAddress(maybeUser.Address)) {
			throw new Error('Not exists');
		}

		Object.assign(user, maybeUser);
	};

	const registration = async (params: RegistrationParams) => {
		await authApi.registration(params);
	};

	const logout = () => {
		Object.assign(user, guest);
	};

	return { user, isAuth, registration, login, logout };
});
