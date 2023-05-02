import { defineStore } from 'pinia';
import { ref } from 'vue';
import { web3Api } from '@/shared/api';
import type { Address } from '@/shared/types';

export const WEB3_ADDRESSES_STORE = 'WEB_ADDRESSES_STORE';

export const useWeb3AddressesStore = defineStore(WEB3_ADDRESSES_STORE, () => {
	const items = ref<Address[]>([]);

	const start = async () => {
		const addresses = await web3Api.getAddresses();

		items.value = addresses;
	};

	return {
		items,
		start,
	};
});
