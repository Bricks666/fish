import * as React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RegistrationForm } from '@/components/RegistrationForm';

const RegistrationPage: React.FC = () => {
	return (
		<Container>
			<h2>Регистрация</h2>
			<RegistrationForm />
			<Button variant='link' as={Link} to='/login'>
				Войти
			</Button>
		</Container>
	);
};

export default RegistrationPage;
