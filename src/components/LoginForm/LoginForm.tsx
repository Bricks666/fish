import * as React from 'react';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useField } from '@/hooks/useField';
import { loginThunk } from '@/models/auth';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { useGetAddressesQuery } from '@/models/addresses';

export interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = () => {
	const { data: addresses = [], isLoading } = useGetAddressesQuery(undefined);
	const dispatch = useTypedDispatch();
	const account = useField('0');
	const login = useField('');
	const password = useField('');
	const navigate = useNavigate();

	const onSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
		async (evt) => {
			evt.preventDefault();
			const isLogin = await dispatch(loginThunk(account.value, login.value, password.value));
			if (isLogin) {
				navigate('/profile', { replace: true });
			}
		},
		[account.value, password.value, login.value, dispatch, navigate]
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
					<Form.Label>Пароль</Form.Label>
					<Form.Control {...password} type='password' />
				</Form.Group>
				<Button type='submit'>Войти</Button>
			</Form>
		</Container>
	);
};
