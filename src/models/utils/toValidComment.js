export const toValidComment = (comment) => {
	return {
		id: +comment.id,
		reviewId: +comment.reviewId,
		body: comment.text,
		subjectAddress: comment.subjectAddress,
	};
};
