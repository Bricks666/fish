import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Comments } from '@/components/Comments';
import { Review } from '@/components/Review';
import { SEARCH_PARAMS } from '@/consts';
import { useSearchParam } from '@/hooks';

const ReviewPage: React.FC = () => {
	const id = +useSearchParam(SEARCH_PARAMS.REVIEW_ID);
	const subjectAddress = useSearchParam(SEARCH_PARAMS.SUBJECT_ADDRESS);

	return (
		<Container>
			<h2>Отзывы</h2>
			<Review id={id} subjectAddress={subjectAddress} />
			<Comments reviewId={id} subjectAddress={subjectAddress} />
		</Container>
	);
};

export default ReviewPage;
