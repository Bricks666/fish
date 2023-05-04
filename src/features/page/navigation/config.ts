import { ROLES, URLS } from '@/shared/config';
import type { NavigationItemParams } from './types';

export const navigationItems: NavigationItemParams[] = [
	{
		label: 'Профиль',
		path: '/profile',
		roles: [ROLES.GUEST],
		invert: true,
	},
	{
		label: 'Магазины',
		path: URLS.shops,
	},
	{
		label: 'Запросы',
		children: [
			{
				label: 'Мои запросы',
				path: URLS.myRequests,
			},
			{
				label: 'Все запросы',
				path: URLS.allRequests,
				roles: [ROLES.ADMIN],
			},
		],
		roles: [ROLES.ADMIN, ROLES.SHOPER, ROLES.USER],
	},
];
