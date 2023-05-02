import * as React from 'react';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useField } from '@old/hooks/useField';
import { useGetAddressesQuery } from '@old/models/addresses';
import { useLoginMutation } from '@old/models/auth/api';

export interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = () => {
	const { data: addresses = [], isLoading, } = useGetAddressesQuery(undefined);
	const [trigger] = useLoginMutation({ fixedCacheKey: 'login', });
	const account = useField('0');
	const login = useField('');
	const password = useField('');
	const navigate = useNavigate();

	const onSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
		async (evt) => {
			evt.preventDefault();
			const isLogin = await trigger({
				address: account.value,
				login: login.value,
				password: password.value,
			});
			if (isLogin) {
				navigate('/profile', { replace: true, });
			}
		},
		[account.value, password.value, login.value, navigate]
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
							<Form.Select value={account.value} onChange={account.onChange}>
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
					<Form.Control value={login.value} onChange={login.onChange} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Пароль</Form.Label>
					<Form.Control value={password.value} onChange={password.onChange} type='password' />
				</Form.Group>
				<Button type='submit'>Войти</Button>
			</Form>
		</Container>
	);
};
