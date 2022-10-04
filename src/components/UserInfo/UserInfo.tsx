import * as React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import Web3 from 'web3';
import { ROLES_NAME } from '@/consts';
import { User } from '@/models/salesmen';

export interface UserInfoProps extends User {}

export const UserInfo: React.FC<React.PropsWithChildren<UserInfoProps>> = (props) => {
	const { login, address, name, role, shopAddress, children } = props;

	const showShop: boolean = !!shopAddress && Web3.utils.hexToNumberString(shopAddress) !== '0';
	return (
		<Container>
			<ListGroup as='dl'>
				<ListGroup.Item as='dt'>Логин</ListGroup.Item>
				<ListGroup.Item as='dd'>{login}</ListGroup.Item>
				<ListGroup.Item as='dt'>Адрес кошелька</ListGroup.Item>
				<ListGroup.Item as='dd'>{address}</ListGroup.Item>
				<ListGroup.Item as='dt'>Имя</ListGroup.Item>
				<ListGroup.Item as='dd'>{name}</ListGroup.Item>
				<ListGroup.Item as='dt'>Роль</ListGroup.Item>
				<ListGroup.Item as='dd'>{ROLES_NAME[role]}</ListGroup.Item>
				{showShop && (
					<>
						<ListGroup.Item as='dt'>Магазин:</ListGroup.Item>
						<ListGroup.Item as='dd'>{shopAddress}</ListGroup.Item>
					</>
				)}
				{children}
			</ListGroup>
		</Container>
	);
};
