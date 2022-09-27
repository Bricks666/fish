import { ListGroup, Spinner } from 'react-bootstrap';
import { useBalance, useUser } from '../../hooks';
import { UserInfo } from '../UserInfo';
import { toEth } from '../../utils';
import { ProfileButtons } from '../ProfileButtons';

export const ProfileInfo = () => {
	const { info, isLoading, } = useUser();
	const balance = useBalance(info.address);

	return isLoading ? (
		<Spinner variant='border' />
	) : (
		<UserInfo {...info}>
			<ListGroup.Item as='dt'>Баланс</ListGroup.Item>
			<ListGroup.Item as='dd'>
				{toEth(balance)}
				{' '}
				ETH
			</ListGroup.Item>
			{!info.onRequest && <ProfileButtons role={info.role} />}
		</UserInfo>
	);
};
