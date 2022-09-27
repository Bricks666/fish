import * as React from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { ProfileButtons } from '../ProfileButtons';
import { UserInfo } from '../UserInfo';
import { useBalance } from '@/hooks/useBalance';
import { useUser } from '@/hooks/useUser';
import { convert } from '@/utils/converts';

export const ProfileInfo: React.FC = () => {
	const { info, isLoading } = useUser();
	const balance = useBalance(info.address);

	return isLoading ? (
		<Spinner animation='border' />
	) : (
		<UserInfo {...info}>
			<ListGroup.Item as='dt'>Баланс</ListGroup.Item>
			<ListGroup.Item as='dd'>{convert(balance, 'ether')} ETH</ListGroup.Item>
			{!info.onRequest && <ProfileButtons role={info.role} />}
		</UserInfo>
	);
};
