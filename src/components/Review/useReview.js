import { useReviews } from "../../hooks";

export const useReview = (subjectAddress, reviewId) => {
	const { reviews } = useReviews(subjectAddress);

	return reviews.find((review) => review.id === reviewId);
};
