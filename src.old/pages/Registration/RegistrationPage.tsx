import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RegistrationForm } from '@old/components/RegistrationForm';
import { MainLayout } from '@old/layouts/MainLayout';

const RegistrationPage: React.FC = () => {
	return (
		<MainLayout>
			<h2>Регистрация</h2>
			<RegistrationForm />
			<Button variant='link' as={Link as any} to='/login'>
				Войти
			</Button>
		</MainLayout>
	);
};

export default RegistrationPage;
