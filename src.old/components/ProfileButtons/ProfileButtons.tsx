import * as React from 'react';
import { Container, Button } from 'react-bootstrap';
import { ROLES } from '@old/consts/user';
import { REQUEST_TYPE } from '@old/consts/request';
import { useAddRequestMutation } from '@old/models/requests';
import { useLogin } from '@old/hooks/useLogin';

export interface ProfileButtonsProps {
	readonly role: number;
}

export const ProfileButtons: React.FC<ProfileButtonsProps> = ({ role, }) => {
	const [, { data: sender = '', }] = useLogin();
	const [addRequest] = useAddRequestMutation();

	const toBeAdmin = React.useCallback(() => {
		addRequest({ sender, type: REQUEST_TYPE.TO_ADMIN, });
	}, [addRequest, sender]);
	const toBeUser = React.useCallback(() => {
		addRequest({ sender, type: REQUEST_TYPE.TO_USER, });
	}, [addRequest, sender]);

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
