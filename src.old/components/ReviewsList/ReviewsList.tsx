import * as React from 'react';
import { Container, ListGroup, Spinner } from 'react-bootstrap';
import { ReviewCard } from '../ReviewCard';
import { ROLES } from '@old/consts';
import { Address } from '@old/packages/web3';
import { useUser } from '@old/hooks/useUser';
import { useGetReviewsQuery } from '@old/models/reviews';

export interface ReviewsListProps {
	readonly subjectAddress: Address;
}

export const ReviewsList: React.FC<ReviewsListProps> = (props) => {
	const { subjectAddress, } = props;
	const { data: reviews = [], isLoading, } = useGetReviewsQuery({ subjectAddress, });
	const { info, } = useUser();

	if (!info) {
		return null;
	}

	const { role, address, } = info;
	return (
		<Container>
			{isLoading ? (
				<Spinner animation='border' />
			) : (
				<ListGroup>
					{reviews.map((review) => (
						<ListGroup.Item key={review.id}>
							<ReviewCard
								{...review}
								isGuest={role === ROLES.GUEST}
								isMarked={review.likes.includes(address) || review.dislikes.includes(address)}
								authAddress={address}
							/>
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</Container>
	);
};
