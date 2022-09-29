import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import { STATUSES } from '@/consts';
import { acceptRequestThunk, cancelRequestThunk } from '@/models/requests';
import { RequestCard, RequestCardProps } from '../RequestCard';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';

export interface AdminRequestCardProps extends RequestCardProps {}

export const AdminRequestCard: React.FC<AdminRequestCardProps> = (props) => {
	const { status, id } = props;
	const isFinish = status !== STATUSES.WAITING;
	const dispatch = useTypedDispatch();

	const onAccept = React.useCallback(() => {
		dispatch(acceptRequestThunk(id));
	}, [id, dispatch]);

	const onCancel = React.useCallback(() => {
		dispatch(cancelRequestThunk(id));
	}, [id, dispatch]);
	return (
		<RequestCard {...props}>
			{!isFinish && (
				<Card.Footer>
					<Button variant='success' onClick={onAccept}>
						Принять
					</Button>
					<Button variant='danger' onClick={onCancel}>
						Отклонить
					</Button>
				</Card.Footer>
			)}
		</RequestCard>
	);
};
