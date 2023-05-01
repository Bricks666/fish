import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import { REQUEST_TYPE } from '@/consts/request';
import { ROLES } from '@/consts/user';
import { useUser } from '@/hooks/useUser';
import { Shop, useDeleteShopMutation } from '@/models/shops';
import { useAddRequestMutation } from '@/models/requests';
import { useLogin } from '@/hooks/useLogin';

export interface ShopCardProps extends Shop {}

export const ShopCard: React.FC<ShopCardProps> = React.memo((props) => {
	const { name, city, id, address, } = props;
	const [, { data: sender = '', }] = useLogin();
	const [addRequest] = useAddRequestMutation();
	const [deleteShop] = useDeleteShopMutation();
	const { info, } = useUser();
	const onSalesmanRequest = React.useCallback(() => {
		addRequest({
			sender,
			type: REQUEST_TYPE.TO_SHOPER,
			shopAddress: address,
		});
	}, [address, addRequest, sender]);
	const onDeleteShop = React.useCallback(() => {
		deleteShop({ sender, shopId: id, });
	}, [address, id, deleteShop]);

	if (!info) {
		return null;
	}

	const { role, onRequest, } = info;

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
					<Button onClick={onSalesmanRequest}>Стать продавцом</Button>
				)}
				{role === ROLES.ADMIN && (
					<Button onClick={onDeleteShop} variant='danger'>
						Удалить
					</Button>
				)}
			</Card.Footer>
		</Card>
	);
});
