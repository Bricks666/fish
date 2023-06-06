import { createContractRequest } from '../contract';
import type {
	AddReviewParams,
	ChangeReviewStatusParams,
	GetReviewParams,
	GetReviewsParams,
	ReviewResponse
} from './types';

export const getReviews = createContractRequest<GetReviewsParams, Promise<ReviewResponse[]>>(
	async (params) => {
		const { subjectAddress, contract, } = params;
		return contract.methods.getReviews(subjectAddress).call();
	}
);
export const getReview = createContractRequest<GetReviewParams, Promise<ReviewResponse>>(
	async (params) => {
		const { subjectAddress, id, contract, } = params;
		return contract.methods.getReview(subjectAddress, id).call();
	}
);

export const addReview = createContractRequest<AddReviewParams, Promise<void>>(async (params) => {
	const { mark, sender, subjectAddress, text, contract, } = params;
	await contract.methods.addReview(subjectAddress, text, mark).send({ from: sender, });
});

export const likeReview = createContractRequest<ChangeReviewStatusParams, Promise<void>>(
	async (params) => {
		const { id, sender, subjectAddress, contract, } = params;
		await contract.methods.likeReview(subjectAddress, id).send({ from: sender, });
	}
);

export const dislikeReview = createContractRequest<ChangeReviewStatusParams, Promise<void>>(
	async (params) => {
		const { id, sender, subjectAddress, contract, } = params;
		await contract.methods.dislikeReview(subjectAddress, id).send({ from: sender, });
	}
);
