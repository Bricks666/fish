import { authUserModel, prepareUser } from '@/entities/users';
import { authApi, usersApi } from '@/shared/api';
import { createDataFetch } from '@/shared/lib';
import { defineStore } from 'pinia';

export const KEY = 'LOGIN_STORE';

export const useStore = defineStore(KEY, () => {
	const authUser = authUserModel.useStore();

	const login: typeof authApi.login = async (params) => {
		await authApi.login(params);
		const maybeUser = await usersApi.getUser({ address: params.address });
		authUser.$patch({ result: prepareUser(maybeUser) });
	};

	return createDataFetch({
		handler: login,
	});
});
