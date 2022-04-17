export const toValidReview = (review) => {
	return {
		id: +review.id,
		body: review.text,
		subjectAddress: review.subjectAddress,
		mark: +review.mark,
		likes: review.likes ?? [],
		dislikes: review.dislikes ?? [],
	};
};
