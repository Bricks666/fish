import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Address } from '@old/packages/web3';
import { AddReviewForm } from './AddReviewForm';

export interface AddReviewProps {
	readonly subjectAddress: Address;
}

export const AddReview: React.FC<AddReviewProps> = React.memo((props) => {
	const { subjectAddress, } = props;
	return (
		<Container>
			<h3>Добавить отзыв</h3>
			<AddReviewForm subjectAddress={subjectAddress} />
		</Container>
	);
});
