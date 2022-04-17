import { Navigate } from "react-router";
import {
	LoginPage,
	ProfilePage,
	RegistrationPage,
	RequestsPage,
	SalesmanPage,
	ShopsPage,
} from "../pages";

export const routes = [
	{
		Component: LoginPage,
		path: "/login",
	},
	{
		Component: RegistrationPage,
		path: "/registration",
	},
	{
		Component: ProfilePage,
		path: "/profile",
		isOnlyAuth: true,
	},
	{
		Component: RequestsPage,
		path: "/requests/*",
		isOnlyAuth: true,
	},
	{
		Component: ShopsPage,
		path: "/shops/*",
	},
	{
		Component: () => <Navigate to="/profile" replace={true} />,
		path: "*",
	},
	{
		Component: SalesmanPage,
		path: "/salesmen/:address",
	},
];
