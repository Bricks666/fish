import { useEffect } from 'react';
import {
	loadSalesmenThunk,
	resetSalesmenAC,
	subscribeNewSalesmanThunk,
} from '@/models/salesmen';
import { useTypedDispatch } from './useTypedDispatch';
import { useTypedSelector } from './useTypedSelector';
import { Address } from '@/interfaces/web3';

export const useSalesmen = (shopAddress: Address) => {
	const salesmen = useTypedSelector((state) => state.salesmen.salesmen);
	const isLoading = useTypedSelector((state) => state.salesmen.isLoading);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		if (!salesmen.length) {
			dispatch(loadSalesmenThunk(shopAddress));
			dispatch(subscribeNewSalesmanThunk(shopAddress));
		}
	}, [dispatch, salesmen.length, shopAddress]);

	useEffect(() => {
		return () => {
			dispatch(resetSalesmenAC());
		};
	}, [dispatch]);

	return {
		salesmen,
		isLoading,
	};
};
