import { defineStore } from 'pinia';
import { authApi } from '@/shared/api';
import { createDataFetch } from '@/shared/lib';

export const KEY = 'REGISTRATION_STORE';

export const useStore = defineStore(KEY, () => {
	return createDataFetch({
		handler: authApi.registration,
	});
});
