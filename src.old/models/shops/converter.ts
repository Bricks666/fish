import { Shop, ShopResponse } from './types';

export const converter = (shop: ShopResponse): Shop => {
	return {
		id: +shop.id,
		address: shop.Address,
		name: shop.Name,
		city: shop.city,
	};
};
