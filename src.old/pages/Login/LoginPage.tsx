import * as React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoginForm } from '@old/components/LoginForm';
import { MainLayout } from '@old/layouts/MainLayout';
import { useLoginMutation } from '@old/models/auth/api';

const LoginPage: React.FC = () => {
	const [, { isError, }] = useLoginMutation({ fixedCacheKey: 'login', });

	return (
		<MainLayout>
			<h2>Вход</h2>
			{isError && (
				<Alert variant='danger'>
					<Alert.Heading>Ошибка входа</Alert.Heading>
					Ошибка входа
				</Alert>
			)}
			<LoginForm />
			<Button variant='link' as={Link as any} to='/registration'>
				Регистрация
			</Button>
		</MainLayout>
	);
};

export default LoginPage;
