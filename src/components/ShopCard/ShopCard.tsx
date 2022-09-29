import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { REQUEST_TYPE } from '@/consts/request';
import { ROLES } from '@/consts/user';
import { useUser } from '@/hooks/useUser';
import { addRequestThunk } from '@/models/requests';
import { deleteShopThunk, Shop } from '@/models/shops';

export interface ShopCardProps extends Shop {}

export const ShopCard: React.FC<ShopCardProps> = React.memo((props) => {
	const { name, city, address } = props;
	const dispatch = useDispatch();
	const {
		info: { role, onRequest },
	} = useUser();
	const toBeShoper = React.useCallback(() => {
		dispatch(addRequestThunk(REQUEST_TYPE.TO_SHOPER, address));
	}, [address, dispatch]);
	const deleteShop = React.useCallback(() => {
		dispatch(deleteShopThunk(address));
	}, [address, dispatch]);
	return (
		<Card>
			<Card.Header>
				<Card.Title>{name}</Card.Title>
			</Card.Header>
			<Card.Body>
				<Card.Text>
					Город
					{city}
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				{role === ROLES.USER && !onRequest && (
					<Button onClick={toBeShoper}>Стать продавцом</Button>
				)}
				{role === ROLES.ADMIN && (
					<Button onClick={deleteShop} variant='danger'>
						Удалить
					</Button>
				)}
			</Card.Footer>
		</Card>
	);
});
