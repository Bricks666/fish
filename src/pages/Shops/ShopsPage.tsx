import * as React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AddShop } from '@/components/AddShop';
import { Shop } from '@/components/Shop';
import { ShopsList } from '@/components/ShopsList';
import { resetShopsAC } from '@/models/shops';

const ShopsPage: React.FC = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		return () => {
			dispatch(resetShopsAC());
		};
	}, [dispatch]);
	return (
		<Container>
			<Routes>
				<Route path='/all' element={<ShopsList />} />
				<Route path='/add' element={<AddShop />} />
				<Route path=':id/*' element={<Shop />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Container>
	);
};

export default ShopsPage;
