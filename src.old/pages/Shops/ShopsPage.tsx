import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AddShop } from '@old/components/AddShop';
import { Shop } from '@old/components/Shop';
import { ShopsList } from '@old/components/ShopsList';
import { MainLayout } from '@old/layouts/MainLayout';

const ShopsPage: React.FC = () => {
	return (
		<MainLayout>
			<Routes>
				<Route path='all' element={<ShopsList />} />
				<Route path='add' element={<AddShop />} />
				<Route path=':shopId/*' element={<Shop />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</MainLayout>
	);
};

export default ShopsPage;
