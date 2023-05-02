import * as React from 'react';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useField } from '@old/hooks/useField';
import { registrationThunk } from '@old/models/auth';
import { useTypedDispatch } from '@old/hooks/useTypedDispatch';
import { useGetAddressesQuery } from '@old/models/addresses';

export const RegistrationForm: React.FC = () => {
	const { data: addresses = [], isLoading, } = useGetAddressesQuery(undefined);
	const account = useField('0');
	const login = useField('');
	const name = useField('');
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();

	const onSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
		async (evt) => {
			evt.preventDefault();
			const isRegistration = await dispatch(
				registrationThunk(account.value, login.value, name.value)
			);
			if (isRegistration) {
				navigate('/login', { replace: true, });
			}
		},
		[account.value, name.value, dispatch, login.value, navigate]
	);

	return (
		<Container>
			<Form onSubmit={onSubmit}>
				<Form.Group>
					{isLoading ? (
						<Spinner animation='border' />
					) : (
						<>
							<Form.Label>Аккаунт</Form.Label>
							<Form.Select {...account}>
								<option value='0'>None</option>
								{addresses.map((address) => (
									<option value={address} key={address}>
										{address}
									</option>
								))}
							</Form.Select>
						</>
					)}
				</Form.Group>
				<Form.Group>
					<Form.Label>Логин</Form.Label>
					<Form.Control {...login} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Имя</Form.Label>
					<Form.Control {...name} />
				</Form.Group>
				<Button type='submit'>Зарегистрироваться</Button>
			</Form>
		</Container>
	);
};
