import { web3Api } from '../web3';
import type {
	CommentResponse,
	GetCommentsParams,
	GetCommentParams,
	AddCommentParams
} from './types';

export const getCommentsApi = async (params: GetCommentsParams): Promise<CommentResponse[]> => {
	const { reviewId, subjectAddress, } = params;
	return web3Api.contract.methods.getComments(subjectAddress, reviewId).call();
};
export const getCommentApi = async (params: GetCommentParams): Promise<CommentResponse> => {
	const { id, reviewId, subjectAddress, } = params;
	return web3Api.contract.methods.getComment(subjectAddress, reviewId, id).call();
};

export const addCommentApi = async (params: AddCommentParams): Promise<void> => {
	const { reviewId, sender, subjectAddress, text, } = params;
	await web3Api.contract.methods.addComment(subjectAddress, reviewId, text).send({ from: sender, });
};
