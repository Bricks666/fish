import { ReviewResponse } from '@/models/reviews';
import { Address } from '@/packages/web3';
import { contract } from './core';

export const getReviewsApi = async (subjectAddress: Address): Promise<ReviewResponse[]> => {
	return contract.methods.getReviews(subjectAddress).call();
};
export const getReviewApi = async (
	subjectAddress: Address,
	reviewId: number
): Promise<ReviewResponse> => {
	return contract.methods.getReview(subjectAddress, reviewId).call();
};

export const addReviewApi = async (
	address: Address,
	subjectAddress: Address,
	text: string,
	mark: number
): Promise<void> => {
	await contract.methods.addReview(subjectAddress, text, mark).send({ from: address });
};

export const likeReviewApi = async (
	address: Address,
	subjectAddress: Address,
	reviewId: number
): Promise<void> => {
	await contract.methods.likeReview(subjectAddress, reviewId).send({ from: address });
};

export const dislikeReviewApi = async (
	address: Address,
	subjectAddress: Address,
	reviewId: number
): Promise<void> => {
	await contract.methods.dislikeReview(subjectAddress, reviewId).send({ from: address });
};
