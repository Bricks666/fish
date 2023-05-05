import { shopsApi } from '@/shared/api';
import { arrayMapper, createDataFetch } from '@/shared/lib';
import { defineStore } from 'pinia';
import { prepareShop } from '../lib';

export const KEY = 'SHOPS_STORE';

export const useStore = defineStore(KEY, () => {
	return createDataFetch({
		handler: shopsApi.getShops,
		mapResult: arrayMapper(prepareShop),
		defaultValue: [],
	});
});
