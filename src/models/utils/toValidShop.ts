export const toValidShop = (shop) => {
	return {
		id: +shop.id,
		address: shop.Address,
		name: shop.Name,
		city: shop.city,
	};
};
