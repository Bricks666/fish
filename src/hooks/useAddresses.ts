import { useEffect } from 'react';
import { loadAddressesThunk } from '@/models/addresses';
import { useTypedSelector } from './useTypedSelector';
import { useTypedDispatch } from './useTypedDispatch';

export interface UseAddressResult {
	readonly addresses: string[];
	readonly isLoading: boolean;
}

export const useAddresses = (): UseAddressResult => {
	const addresses = useTypedSelector((state) => state.address.addresses);
	const isLoading = useTypedSelector((state) => state.address.isLoading);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		if (!addresses.length && !isLoading) {
			dispatch(loadAddressesThunk());
		}
	}, [addresses.length, isLoading, dispatch]);

	return { addresses, isLoading };
};
