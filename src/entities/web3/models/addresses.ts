import { defineStore } from 'pinia';
import { web3Api } from '@/shared/api';
import { createDataFetch } from '@/shared/lib';

export const KEY = 'WEB_ADDRESSES_STORE';

export const useStore = defineStore(KEY, () => {
	return createDataFetch({
		handler: web3Api.getAddresses,
		defaultValue: [],
	});
});
