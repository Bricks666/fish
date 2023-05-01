import { CommentResponse } from '@/models/comments';
import { Address } from '@/packages/web3';
import { contract } from './core';

export const getCommentsApi = async (
	subjectAddress: Address,
	reviewId: number
): Promise<CommentResponse[]> => {
	return contract.methods.getComments(subjectAddress, reviewId).call();
};
export const getCommentApi = async (
	subjectAddress: Address,
	reviewId: number,
	commentId: number
): Promise<CommentResponse> => {
	return contract.methods.getComment(subjectAddress, reviewId, commentId).call();
};

export const addCommentApi = async (
	sender: Address,
	subjectAddress: Address,
	reviewId: number,
	text: string
): Promise<void> => {
	await contract.methods.addComment(subjectAddress, reviewId, text).send({ from: sender, });
};
