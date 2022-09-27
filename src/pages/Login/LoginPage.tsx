import * as React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoginForm } from '@/components/LoginForm';
import { MainLayout } from '@/layouts/MainLayout';
import { api } from '@/models/address';
import { useTypesSelector } from '@/hooks/useTypedSelector';

const LoginPage: React.FC = () => {
	const loginError = useTypesSelector((state) => state.auth.loginError);

	const data = api.useTestQuery(undefined);

	console.log(data);

	return (
		<MainLayout>
			<h2>Вход</h2>
			{loginError && (
				<Alert variant='danger'>
					<Alert.Heading>Ошибка входа</Alert.Heading>
					{loginError}
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
