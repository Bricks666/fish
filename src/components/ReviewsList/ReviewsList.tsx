import * as React from 'react';
import { Container, ListGroup, Spinner } from 'react-bootstrap';
import { ReviewCard } from '../ReviewCard';
import { ROLES } from '@/consts';
import { Address } from '@/packages/web3';
import { useReviews } from '@/hooks/useReviews';
import { useUser } from '@/hooks/useUser';
import { useLoginMutation } from '@/models/auth/api';

export interface ReviewsListProps {
	readonly subjectAddress: Address;
}

export const ReviewsList: React.FC<ReviewsListProps> = (props) => {
	const { subjectAddress } = props;
	const [, { data: authAddress }] = useLoginMutation({ fixedCacheKey: 'login' });
	const { isLoading, reviews } = useReviews(subjectAddress);
	const {
		info: { address, role },
	} = useUser();
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
								authAddress={authAddress!}
							/>
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</Container>
	);
};
