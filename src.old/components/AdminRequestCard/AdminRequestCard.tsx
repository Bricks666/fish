import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import { STATUSES } from '@/consts';
import { RequestCard, RequestCardProps } from '../RequestCard';
import { useLogin } from '@/hooks/useLogin';
import { useAcceptRequestMutation, useCancelRequestMutation } from '@/models/requests';

export interface AdminRequestCardProps extends RequestCardProps {}

export const AdminRequestCard: React.FC<AdminRequestCardProps> = (props) => {
	const { status, id } = props;
	const [, { data: sender = '' }] = useLogin();
	const [acceptRequest] = useAcceptRequestMutation();
	const [cancelRequest] = useCancelRequestMutation();
	const isFinish = status !== STATUSES.WAITING;

	const onAccept = React.useCallback(() => {
		acceptRequest({
			sender,
			requestId: id,
		});
	}, [id]);

	const onCancel = React.useCallback(() => {
		cancelRequest({
			sender,
			requestId: id,
		});
	}, [id]);
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
