import { useCallback } from 'react';
import { Container, Form, Spinner, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAddresses, useField } from '@/hooks';
import { addShopThunk } from '../../../models/shops';

export const AddShopFrom = () => {
	const { addresses, isLoading, } = useAddresses();
	const dispatch = useDispatch();
	const { reset: resetAccount, ...account } = useField(0);
	const { reset: resetLogin, ...login } = useField('');
	const { reset: resetName, ...name } = useField('');
	const { reset: resetCity, ...city } = useField('');

	const onSubmit = useCallback(
		async (evt) => {
			evt.preventDefault();
			dispatch(
				addShopThunk(account.value, login.value, name.value, city.value)
			);
			resetAccount();
			resetLogin();
			resetName();
			resetCity();
		},
		[
			account.value,
			name.value,
			login.value,
			dispatch,
			city.value,
			resetAccount,
			resetLogin,
			resetName,
			resetCity
		]
	);

	return (
		<Container>
			<Form onSubmit={onSubmit}>
				<Form.Group>
					{isLoading ? (
						<Spinner variant='border' />
					) : (
						<>
							<Form.Label>Аккаунт</Form.Label>
							<Form.Select {...account}>
								<option value={0} />
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
				<Form.Group>
					<Form.Label>Город</Form.Label>
					<Form.Control {...city} />
				</Form.Group>
				<Button type='submit'>Добавить</Button>
			</Form>
		</Container>
	);
};
