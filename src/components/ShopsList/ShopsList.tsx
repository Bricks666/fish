import { Container, ListGroup, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useShops } from '@/hooks';
import { ShopCard } from '../ShopCard';

export const ShopsList = () => {
	const { isLoading, shops, } = useShops();
	return (
		<Container>
			{isLoading ? <Spinner variant='border' />
				: (
					<ListGroup>
						{shops.map((shop) => (
							<ListGroup.Item key={shop.id}>
								<ShopCard {...shop} />
								<Button variant='link' to={`/shops/${shop.id}`} as={Link as any}>Подробнее</Button>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
		</Container>
	);
};
