import { web3Api } from '../web3';
import type {
	AddReviewParams,
	ChangeReviewStatusParams,
	GetReviewParams,
	GetReviewsParams,
	ReviewResponse
} from './types';

export const getReviews = async (params: GetReviewsParams): Promise<ReviewResponse[]> => {
	const { subjectAddress, } = params;
	return web3Api.contract.methods.getReviews(subjectAddress).call();
};
export const getReview = async (params: GetReviewParams): Promise<ReviewResponse> => {
	const { subjectAddress, id, } = params;
	return web3Api.contract.methods.getReview(subjectAddress, id).call();
};

export const addReview = async (params: AddReviewParams): Promise<void> => {
	const { mark, sender, subjectAddress, text, } = params;
	await web3Api.contract.methods.addReview(subjectAddress, text, mark).send({ from: sender, });
};

export const likeReview = async (params: ChangeReviewStatusParams): Promise<void> => {
	const { id, sender, subjectAddress, } = params;
	await web3Api.contract.methods.likeReview(subjectAddress, id).send({ from: sender, });
};

export const dislikeReview = async (params: ChangeReviewStatusParams): Promise<void> => {
	const { id, sender, subjectAddress, } = params;
	await web3Api.contract.methods.dislikeReview(subjectAddress, id).send({ from: sender, });
};
