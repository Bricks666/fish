import * as React from 'react';
import { Container, Form, Spinner, Button } from 'react-bootstrap';
import { useField } from '@old/hooks/useField';
import { useGetAddressesQuery } from '@old/models/addresses';
import { useCreateShopMutation } from '@old/models/shops';
import { useLogin } from '@old/hooks/useLogin';

export const AddShopFrom: React.FC = () => {
	const { data: addresses = [], isLoading, } = useGetAddressesQuery(undefined);
	const [, { data: sender = '', }] = useLogin();
	const [createShop] = useCreateShopMutation();
	const account = useField('0');
	const login = useField('');
	const name = useField('');
	const city = useField('');

	const onSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
		async (evt) => {
			evt.preventDefault();
			await createShop({
				city: city.value,
				login: login.value,
				shopAddress: account.value,
				shopName: name.value,
				sender,
			});
			account.reset();
			login.reset();
			name.reset();
			city.reset();
		},
		[account.value, name.value, login.value, city.value, sender]
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
					<Form.Label>Имя</Form.Label>
					<Form.Control value={name.value} onChange={name.onChange} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Город</Form.Label>
					<Form.Control value={city.value} onChange={city.onChange} />
				</Form.Group>
				<Button type='submit'>Добавить</Button>
			</Form>
		</Container>
	);
};
