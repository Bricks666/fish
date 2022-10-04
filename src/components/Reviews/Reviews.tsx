import * as React from 'react';
import { Container } from 'react-bootstrap';
import { RoleFilter } from '../RoleFilter';
import { AddReview } from '../AddReview';
import { ReviewsList } from '../ReviewsList';
import { ROLES } from '@/consts/user';
import { Address } from '@/packages/web3';

export interface ReviewsProps {
	readonly subjectAddress: Address;
}

export const Reviews: React.FC<ReviewsProps> = React.memo((props) => {
	const { subjectAddress } = props;
	return (
		<Container>
			<h3>Отзывы</h3>
			<RoleFilter roles={[ROLES.USER, ROLES.ADMIN, ROLES.SHOPER]}>
				<AddReview subjectAddress={subjectAddress} />
			</RoleFilter>
			<ReviewsList subjectAddress={subjectAddress} />
		</Container>
	);
});
