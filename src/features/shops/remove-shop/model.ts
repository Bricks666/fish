import { defineStore } from 'pinia';
import { shopsModel } from '@/entities/shops';
import { authUserModel } from '@/entities/users';
import { shopsApi } from '@/shared/api';
import { createDataFetch } from '@/shared/lib';

export const KEY = 'REMOVE_SHOP_STORE';

export const useStore = defineStore(KEY, () => {
	const authUser = authUserModel.useStore();
	const shops = shopsModel.useStore();

	const remove = async (id: number) => {
		if (!authUser.isAuth) {
			return;
		}

		await shopsApi.deleteShop({
			shopId: id,
			sender: authUser.result.address,
		});

		const result = shops.result.filter((shop) => shop.id !== id);

		shops.$patch({
			result,
		});
	};

	return createDataFetch({
		handler: remove,
	});
});
