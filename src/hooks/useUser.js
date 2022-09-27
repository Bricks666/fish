import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserThunk } from '../models/user';

export const useUser = () => {
	const { address, } = useSelector((state) => state.auth);
	const { info, isLoading, } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (address !== info.address && !isLoading) {
			dispatch(loadUserThunk());
		}
	}, [address, info.address, isLoading, dispatch]);

	return { info, isLoading, };
};
