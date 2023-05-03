import { authApi, usersApi, type LoginParams, type RegistrationParams } from '@/shared/api';
import { isEmptyUser } from '@/shared/lib';
import { defineStore } from 'pinia';
import { reactive } from 'vue';
import type { User } from './types';

export const AUTH_USER_STORE = 'AUTH_USER_STORE';

export const useAuthUserStore = defineStore(AUTH_USER_STORE, () => {
	const user = reactive<User | Record<string, never>>({});

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
