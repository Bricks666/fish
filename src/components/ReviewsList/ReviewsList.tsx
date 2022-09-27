import { Container, ListGroup, Spinner } from 'react-bootstrap';
import { useReviews, useUser } from '@/hooks';
import { ReviewCard } from '../ReviewCard';
import { ROLES } from '../../consts';

export const ReviewsList = ({ subjectAddress, }) => {
	const { isLoading, reviews, } = useReviews(subjectAddress);
	const {
		info: { address, role, },
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
								isMarked={
									review.likes.includes(address)
									|| review.dislikes.includes(address)
								}
							/>
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</Container>
	);
};
