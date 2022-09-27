import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const AuthRoute = ({ children, }) => {
	const isAuth = useSelector((state) => state.auth.isAuth);

	if (isAuth) {
		return children;
	}

	return <Navigate to='/login' replace />;
};
