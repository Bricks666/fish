import * as React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROLES } from '../../consts';
import { logoutAC } from '../../models/auth';
import { Navigation } from '../Navigation';

const navigation = [
	{
		label: 'Магазины',
		path: [
			{
				label: 'Список магазинов',
				path: '/shops/all',
			},
			{
				label: 'Добавить магазин',
				path: '/shops/add',
				roles: [ROLES.ADMIN],
			},
		],
	},
	{
		label: 'Профиль',
		path: '/profile',
		roles: [ROLES.GUEST],
		invert: true,
	},
	{
		label: 'Запросы',
		path: [
			{
				label: 'Мои запросы',
				path: '/requests/my',
			},
			{
				label: 'Все запросы',
				path: '/requests/all',
				roles: [ROLES.ADMIN],
			},
		],
		roles: [ROLES.ADMIN, ROLES.SHOPER, ROLES.USER],
	},
];

export const Header = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuth);

	const onLogout = React.useCallback(() => {
		dispatch(logoutAC());
	}, [dispatch]);
	return (
		<Navbar>
			<Navbar.Text>Продавай и покупай</Navbar.Text>
			<Navigation navigation={navigation} />
			{isAuth ? (
				<Button onClick={onLogout}>Выйти</Button>
			) : (
				<Button variant='link' as={Link} to='/login'>
					Войти
				</Button>
			)}
		</Navbar>
	);
};
