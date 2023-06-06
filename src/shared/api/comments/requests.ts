import { createContractRequest } from '../contract';
import type {
	CommentResponse,
	GetCommentsParams,
	GetCommentParams,
	AddCommentParams
} from './types';

export const getComments = createContractRequest<GetCommentsParams, Promise<CommentResponse[]>>(
	async (params) => {
		const { reviewId, subjectAddress, contract, } = params;
		return contract.methods.getComments(subjectAddress, reviewId).call();
	}
);
export const getComment = createContractRequest<GetCommentParams, Promise<CommentResponse>>(
	async (params) => {
		const { id, reviewId, subjectAddress, contract, } = params;
		return contract.methods.getComment(subjectAddress, reviewId, id).call();
	}
);

export const addComment = createContractRequest<AddCommentParams, Promise<void>>(async (params) => {
	const { reviewId, sender, subjectAddress, text, contract, } = params;
	await contract.methods.addComment(subjectAddress, reviewId, text).send({ from: sender, });
});
