import * as React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Routes, Route, Navigate } from 'react-router-dom';
import { ShopCard } from '../ShopCard';
import { SalesmenList } from '../SalesmenList';
import { Reviews } from '../Reviews';
import { Navigation } from '../Navigation';
import { NavigationItemDesc } from '../NavigationItem';
import { useGetShopQuery } from '@/models/shops';

const navigation: NavigationItemDesc[] = [
	{
		label: 'Продавцы',
		path: 'salesmen',
	},
	{
		label: 'Отзывы',
		path: 'reviews',
	}
];

export const Shop: React.FC = () => {
	const { shopId, } = useParams();
	const { data: shop, } = useGetShopQuery({ shopId: Number(shopId), });

	if (!shop) {
		return null;
	}

	return (
		<Container>
			<ShopCard {...shop} />
			<Navigation navigation={navigation} />
			<Routes>
				<Route path='salesmen' element={<SalesmenList shopId={shop.id} />} />
				<Route path='reviews' element={<Reviews subjectAddress={shop.address} />} />
				<Route path='*' element={<Navigate to='salesmen' replace />} />
			</Routes>
		</Container>
	);
};
