import { useReviews } from '@/hooks/useReviews';
import { Address } from '@/interfaces/web3';

export const useReview = (subjectAddress: Address, reviewId: number) => {
	const { reviews } = useReviews(subjectAddress);

	return reviews.find((review) => review.id === reviewId);
};
