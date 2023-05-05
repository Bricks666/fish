import type { RouteRecordRaw } from 'vue-router';
import { URLS } from '@/shared/config';

const LoginPage = () => import('./login');
const RegistrationPage = () => import('./registration');
const ProfilePage = () => import('./profile');
const MyRequestsPage = () => import('./my-requests');
const AllRequestsPage = () => import('./all-requests');
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
		path: URLS.myRequests,
		component: MyRequestsPage,
	},
	{
		path: URLS.allRequests,
		component: AllRequestsPage,
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
