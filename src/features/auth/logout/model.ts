import { defineStore } from 'pinia';
import { authUserModel, getDefaultUser } from '@/entities/users';
import { createDataFetch } from '@/shared/lib';

export const KEY = 'LOGOUT_STORE';

export const useStore = defineStore(KEY, () => {
	const authUser = authUserModel.useStore();

	const logout = () => {
		authUser.$patch({ result: getDefaultUser(), });
	};

	return createDataFetch({
		handler: logout,
	});
});
