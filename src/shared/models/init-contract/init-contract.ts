import { defineStore } from 'pinia';
import { web3Api } from '@/shared/api';
import { createDataFetch } from '@/shared/lib';

export const KEY = 'INIT_CONTRACT';

export const useStore = defineStore(KEY, () => {
	return createDataFetch({
		handler: web3Api.initContract,
		defaultValue: false,
	});
});
