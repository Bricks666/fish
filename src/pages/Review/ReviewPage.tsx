import * as React from 'react';
import { Comments } from '@/components/Comments';
import { Review } from '@/components/Review';
import { SEARCH_PARAMS } from '@/consts';
import { useSearchParam } from '@/hooks/useSearchParam';
import { MainLayout } from '@/layouts/MainLayout';

const ReviewPage: React.FC = () => {
	const id = Number(useSearchParam(SEARCH_PARAMS.reviewId));
	const subjectAddress = useSearchParam(SEARCH_PARAMS.subjectAddress) || '';

	return (
		<MainLayout>
			<h2>Отзывы</h2>
			<Review id={id} subjectAddress={subjectAddress} />
			<Comments reviewId={id} subjectAddress={subjectAddress} />
		</MainLayout>
	);
};

export default ReviewPage;
