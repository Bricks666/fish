import * as React from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { ProfileButtons } from '../ProfileButtons';
import { UserInfo } from '../UserInfo';
import { convert } from '@/utils/converts';
import { useGetBalanceQuery } from '@/models/user';
import { useUser } from '@/hooks/useUser';

export const ProfileInfo: React.FC = () => {
	const { info, isLoading } = useUser();
	const { data: balance = '0' } = useGetBalanceQuery(info?.address || '', {
		pollingInterval: 100,
	});

	return isLoading ? (
		<Spinner animation='border' />
	) : (
		<UserInfo {...info!}>
			<ListGroup.Item as='dt'>Баланс</ListGroup.Item>
			<ListGroup.Item as='dd'>{convert(balance, 'ether')} ETH</ListGroup.Item>
			{!info!.onRequest && <ProfileButtons role={info!.role} />}
		</UserInfo>
	);
};
