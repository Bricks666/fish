import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AddShop } from '@/components/AddShop';
import { Shop } from '@/components/Shop';
import { ShopsList } from '@/components/ShopsList';
import { resetShopsAC } from '@/models/shops';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { MainLayout } from '@/layouts/MainLayout';

const ShopsPage: React.FC = () => {
	const dispatch = useTypedDispatch();

	React.useEffect(() => {
		return () => {
			dispatch(resetShopsAC());
		};
	}, [dispatch]);

	return (
		<MainLayout>
			<Routes>
				<Route path='/all' element={<ShopsList />} />
				<Route path='/add' element={<AddShop />} />
				<Route path=':id/*' element={<Shop />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</MainLayout>
	);
};

export default ShopsPage;
