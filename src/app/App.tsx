import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { initThunk } from '../models/init';
import { AppRoutes } from '@/components/AppRoutes';

export const App: React.FC = () => {
	const isInit = useSelector((state) => state.init.isInitializing);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(initThunk());
	}, [dispatch]);
	return isInit ? <Spinner animation='border' /> : <AppRoutes />;
};
