import * as React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { ROLES } from '@/consts/user';
import { REQUEST_TYPE } from '@/consts/request';
import { addRequestThunk } from '@/models/requests';

export interface ProfileButtonsProps {
	readonly role: number;
}

export const ProfileButtons: React.FC<ProfileButtonsProps> = ({ role }) => {
	const dispatch = useTypedDispatch();

	const toBeAdmin = React.useCallback(() => {
		dispatch(addRequestThunk(REQUEST_TYPE.TO_ADMIN));
	}, [dispatch]);
	const toBeUser = React.useCallback(() => {
		dispatch(addRequestThunk(REQUEST_TYPE.TO_USER));
	}, [dispatch]);
	let button;
	switch (role) {
		case ROLES.USER: {
			button = <Button onClick={toBeAdmin}>Заявка на администратора</Button>;
			break;
		}
		case ROLES.SHOPER: {
			button = <Button onClick={toBeUser}>Заявка на пользователя</Button>;
			break;
		}
		default: {
			button = null;
			break;
		}
	}

	return button ? <Container>{button}</Container> : null;
};
