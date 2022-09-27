import * as React from 'react';

export interface Route {
	readonly path: string;
	readonly Component: React.ComponentType;
	readonly isOnlyAuth?: boolean;
}

const ShopsPage = React.lazy(() => import('../pages/Shops'));
const SalesmanPage = React.lazy(() => import('../pages/Salesman'));
const RequestsPage = React.lazy(() => import('../pages/Requests'));
const ReviewPage = React.lazy(() => import('../pages/Review'));
const NotFoundPage = React.lazy(() => import('../pages/NotFound'));
const LoginPage = React.lazy(() => import('../pages/Login'));
const RegistrationPage = React.lazy(() => import('../pages/Registration'));
const ProfilePage = React.lazy(() => import('../pages/Profile'));

export const routes: Route[] = [
	{
		Component: LoginPage,
		path: '/login',
	},
	{
		Component: RegistrationPage,
		path: '/registration',
	},
	{
		Component: ProfilePage,
		path: '/profile',
		isOnlyAuth: true,
	},
	{
		Component: RequestsPage,
		path: '/requests/*',
		isOnlyAuth: true,
	},
	{
		Component: ShopsPage,
		path: '/shops/*',
	},
	{
		Component: NotFoundPage,
		path: '*',
	},
	{
		Component: SalesmanPage,
		path: '/salesmen',
	},
	{
		Component: ReviewPage,
		path: '/reviews',
	}
];
