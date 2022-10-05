import { Review, ReviewResponse } from './types';

export const converter = (review: ReviewResponse): Review => {
	return {
		id: +review.id,
		body: review.text,
		subjectAddress: review.subjectAddress,
		mark: +review.mark,
		likes: review.likes ?? [],
		dislikes: review.dislikes ?? [],
	};
};
