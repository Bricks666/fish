import * as React from 'react';
import { Comments } from '@old/components/Comments';
import { Review } from '@old/components/Review';
import { SEARCH_PARAMS } from '@old/consts';
import { useSearchParam } from '@old/hooks/useSearchParam';
import { MainLayout } from '@old/layouts/MainLayout';

const ReviewPage: React.FC = () => {
	const id = Number(useSearchParam(SEARCH_PARAMS.reviewId));
	const subjectAddress = useSearchParam(SEARCH_PARAMS.subjectId) || '';

	return (
		<MainLayout>
			<h2>Отзывы</h2>
			<Review id={id} subjectAddress={subjectAddress} />
			<Comments reviewId={id} subjectAddress={subjectAddress} />
		</MainLayout>
	);
};

export default ReviewPage;
