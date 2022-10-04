import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useLoginMutation } from '@/models/auth/api';

export const AuthRoute: React.FC<React.PropsWithChildren> = (props) => {
	const { children } = props;
	const [, { data }] = useLoginMutation({
		fixedCacheKey: 'login',
	});
	console.log(data);

	if (data) {
		return children as React.ReactElement;
	}

	return <Navigate to='/login' replace />;
};
