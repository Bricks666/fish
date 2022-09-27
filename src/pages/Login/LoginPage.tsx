import * as React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginForm } from '@/components/LoginForm';
import { MainLayout } from '@/layouts/MainLayout';

const LoginPage: React.FC = () => {
	const loginError = useSelector((state) => state.auth.loginError);

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
			<Button variant='link' as={Link} to='/registration'>
				Регистрация
			</Button>
		</MainLayout>
	);
};

export default LoginPage;
