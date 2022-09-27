import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { STATUSES } from '@/consts';
import { acceptRequestThunk, cancelRequestThunk } from '@/models/requests';
import { RequestCard } from '../RequestCard';

export interface AdminRequestCardProps {
	readonly id: number;
	readonly status: number;
}

export const AdminRequestCard: React.FC<AdminRequestCardProps> = (props) => {
	const { status, id } = props;
	const isFinish = status !== STATUSES.WAITING;
	const dispatch = useDispatch();

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
