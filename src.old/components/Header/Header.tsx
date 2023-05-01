/* eslint-disable no-extra-boolean-cast */
import * as React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROLES } from '@/consts/user';
import { Navigation } from '../Navigation';
import { NavigationItemDesc } from '../NavigationItem';
import { useLogin } from '@/hooks/useLogin';

const navigation: NavigationItemDesc[] = [
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
			}
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
			}
		],
		roles: [ROLES.ADMIN, ROLES.SHOPER, ROLES.USER],
	}
];

export const Header = () => {
	const [, { data: address, }] = useLogin();
	return (
		<Navbar>
			<Navbar.Text>Продавай и покупай</Navbar.Text>
			<Navigation navigation={navigation} />
			{!!address ? (
				<Button>Выйти</Button>
			) : (
				<Button variant='link' as={Link as any} to='/login'>
					Войти
				</Button>
			)}
		</Navbar>
	);
};
