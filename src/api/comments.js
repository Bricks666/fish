import { contract } from "./core";

export const getCommentsApi = async (subjectAddress, reviewId) => {
	return await contract.methods.getComments(subjectAddress, reviewId).call();
};
export const getCommentApi = async (subjectAddress, reviewId, commentId) => {
	return await contract.methods
		.getComment(subjectAddress, reviewId, commentId)
		.call();
};

export const addCommentApi = async (address, subjectAddress, reviewId, text) => {
	await contract.methods
		.addComment(subjectAddress, reviewId, text)
		.send({ from: address });
};
