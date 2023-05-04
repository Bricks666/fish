import { ref, watchEffect, type Ref } from 'vue';
import { web3Api } from '@/shared/api';
import type { Address } from '@/shared/types';
import { isEmptyAddress } from '@/shared/lib';

export const useBalance = (address: Ref<Address>) => {
	const balance = ref('0');
	let id: number | null = null;

	watchEffect((onCleanup) => {
		if (isEmptyAddress(address.value)) {
			return;
		}

		const changeBalance = async () => {
			balance.value = await web3Api.getBalance(address.value);
		};

		changeBalance();
		id = window.setInterval(changeBalance, 1000);

		onCleanup(() => {
			if (!id) {
				return;
			}
			clearInterval(id);
		});
	});

	return balance;
};
