import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { REQUEST_TYPE } from '@/consts/request';
import { ROLES } from '@/consts/user';
import { useUser } from '@/hooks/useUser';
import { deleteShopThunk, Shop } from '@/models/shops';
import { useAddRequestMutation } from '@/models/requests';
import { useLogin } from '@/hooks/useLogin';

export interface ShopCardProps extends Shop {}

export const ShopCard: React.FC<ShopCardProps> = React.memo((props) => {
	const { name, city, address } = props;
	const [, { data: sender = '' }] = useLogin();
	const [addRequest] = useAddRequestMutation();
	const dispatch = useDispatch();
	const { info } = useUser();
	const toBeShoper = React.useCallback(() => {
		addRequest({
			sender,
			type: REQUEST_TYPE.TO_SHOPER,
			shopAddress: address,
		});
	}, [address, addRequest, sender]);
	const deleteShop = React.useCallback(() => {
		dispatch(deleteShopThunk(address));
	}, [address, dispatch]);

	if (!info) {
		return null;
	}

	const { role, onRequest } = info;

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
				{role === ROLES.USER && !onRequest && <Button onClick={toBeShoper}>Стать продавцом</Button>}
				{role === ROLES.ADMIN && (
					<Button onClick={deleteShop} variant='danger'>
						Удалить
					</Button>
				)}
			</Card.Footer>
		</Card>
	);
});
