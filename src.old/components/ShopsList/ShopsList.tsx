import * as React from 'react';
import { Container, ListGroup, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ShopCard } from '../ShopCard';
import { useGetShopsQuery } from '@/models/shops';

export const ShopsList: React.FC = () => {
	const { isLoading, data: shops = [], } = useGetShopsQuery(undefined);
	return (
		<Container>
			{isLoading ? (
				<Spinner animation='border' />
			) : (
				<ListGroup>
					{shops.map((shop) => (
						<ListGroup.Item key={shop.id}>
							<ShopCard {...shop} />
							<Button variant='link' to={`/shops/${shop.id}`} as={Link as any}>
								Подробнее
							</Button>
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</Container>
	);
};
