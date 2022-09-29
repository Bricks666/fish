import { useEffect } from 'react';
import { loadUserThunk } from '../models/user';
import { useTypedDispatch } from './useTypedDispatch';
import { useTypedSelector } from './useTypedSelector';

export const useUser = () => {
	const { address } = useTypedSelector((state) => state.auth);
	const { info, isLoading } = useTypedSelector((state) => state.user);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		if (address !== info.address && !isLoading) {
			dispatch(loadUserThunk());
		}
	}, [address, info.address, isLoading, dispatch]);

	return { info, isLoading };
};
