import { useEffect } from 'react';
import {
	loadShopsThunk,
	Shop,
	subscribeDeleteShopThunk,
	subscribeNewShopThunk,
} from '@/models/shops';
import { useTypedSelector } from './useTypedSelector';
import { useTypedDispatch } from './useTypedDispatch';

export interface UseShopsResult {
	readonly isLoading: boolean;
	readonly shops: Shop[];
}

export const useShops = () => {
	const isLoading = useTypedSelector((state) => state.shops.isLoading);
	const shops = useTypedSelector((state) => state.shops.shops);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		if (!shops.length && !isLoading) {
			dispatch(loadShopsThunk());
			dispatch(subscribeNewShopThunk());
			dispatch(subscribeDeleteShopThunk());
		}
	}, [shops.length, isLoading, dispatch]);

	return {
		shops,
		isLoading,
	};
};
