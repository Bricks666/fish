import { useShops } from '@/hooks/useShops';

export const useShop = (id: number) => {
	const { shops } = useShops();

	return shops.find((shop) => shop.id === +id);
};
