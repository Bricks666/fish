import { Comment, CommentResponse } from './types';

export const converter = (comment: CommentResponse): Comment => {
	return {
		id: +comment.id,
		reviewId: +comment.reviewId,
		body: comment.text,
		author: comment.subjectAddress,
	};
};
