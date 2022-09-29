import * as React from 'react';
import { Container } from 'react-bootstrap';
import { AddShopFrom } from './AddShopFrom';

export const AddShop: React.FC = React.memo(() => {
	return (
		<Container>
			<h3>Добавить магазин</h3>
			<AddShopFrom />
		</Container>
	);
});
