import type { ShopResponse } from '@/shared/api';
import type { Shop } from './types';

export const prepareShop = (shop: ShopResponse): Shop => {
	return {
		id: Number(shop.id),
		address: shop.Address,
		name: shop.Name,
		city: shop.city,
	};
};
