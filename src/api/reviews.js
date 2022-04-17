import { contract } from "./core";

export const getReviewsApi = async (subjectAddress) => {
	return await contract.methods.getReviews(subjectAddress).call();
};
export const getReviewApi = async (subjectAddress, reviewId) => {
	return await contract.methods.getReview(subjectAddress, reviewId).call();
};

export const addReviewApi = async (address, subjectAddress, text, mark) => {
	await contract.methods
		.addReview(subjectAddress, text, mark)
		.send({ from: address });
};

export const likeReviewApi = async (address, subjectAddress, reviewId) => {
	await contract.methods
		.likeReview(subjectAddress, reviewId)
		.send({ from: address });
};

export const dislikeReviewApi = async (address, subjectAddress, reviewId) => {
	await contract.methods
		.dislikeReview(subjectAddress, reviewId)
		.send({ from: address });
};
