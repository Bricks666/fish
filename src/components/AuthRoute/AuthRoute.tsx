import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export const AuthRoute: React.FC<React.PropsWithChildren> = (props) => {
	const { children } = props;
	const isAuth = useTypedSelector((state) => state.auth.isAuth);

	if (isAuth) {
		return children as React.ReactElement;
	}

	return <Navigate to='/login' replace />;
};
