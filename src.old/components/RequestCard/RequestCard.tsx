import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Request } from '@/models/requests';
import { REQUEST_TYPE, REQUEST_TYPE_NAME, STATUSES_NAME } from '@/consts/request';
import { ROLES_NAME } from '@/consts';

export interface RequestCardProps extends Request {}

export const RequestCard: React.FC<React.PropsWithChildren<RequestCardProps>> = (props) => {
	const { id, type, sender, currentRole, newRole, status, shopAddress, children } = props;
	return (
		<Card>
			<Card.Header>
				<Card.Title>Заявка #{id}</Card.Title>
			</Card.Header>
			<Card.Body>
				<Card.Text>
					Тип:
					{REQUEST_TYPE_NAME[type]}
				</Card.Text>
				<Card.Text>
					Отправитель:
					{sender}
				</Card.Text>
				<Card.Text>
					Текущая роль отправителя:
					{ROLES_NAME[currentRole]}
				</Card.Text>
				<Card.Text>
					Желаемая роль отправителя:
					{ROLES_NAME[newRole]}
				</Card.Text>
				<Card.Text>
					Текущий статус:
					{STATUSES_NAME[status]}
				</Card.Text>
				{type === REQUEST_TYPE.TO_SHOPER && <Card.Text>{shopAddress}</Card.Text>}
			</Card.Body>
			{children}
		</Card>
	);
};
