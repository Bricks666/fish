import type { RouteRecordRaw } from 'vue-router';
import { URLS } from '@/shared/config';

const LoginPage = () => import('./login');
const RegistrationPage = () => import('./registration');
const ProfilePage = () => import('./profile');
const RequestsPage = () => import('./requests');
const ShopsPage = () => import('./shops');
const ReviewPage = () => import('./review');
const SalesmanPage = () => import('./salesman');

export const routes: RouteRecordRaw[] = [
	{
		path: URLS.login,
		component: LoginPage,
	},
	{
		path: URLS.registration,
		component: RegistrationPage,
	},
	{
		path: URLS.profile,
		component: ProfilePage,
	},
	{
		path: URLS.requests,
		component: RequestsPage,
	},
	{
		path: URLS.shops,
		component: ShopsPage,
	},
	{
		path: URLS.review,
		component: ReviewPage,
	},
	{
		path: URLS.salesman,
		component: SalesmanPage,
	}
];
export { default as AppPages } from './app-pages.vue';
