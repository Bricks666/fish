import { Address } from '@old/packages/web3';

export interface Comment {
	readonly id: number;
	readonly reviewId: number;
	readonly body: string;
	readonly author: Address;
}

export interface GetCommentsParams {
	readonly subjectAddress: Address;
	readonly reviewId: number;
}

export interface AddCommentParams {
	readonly sender: Address;
	readonly subjectAddress: Address;
	readonly reviewId: number;
	readonly text: string;
}

export interface CommentResponse {
	readonly id: string;
	readonly reviewId: string;
	readonly text: string;
	readonly subjectAddress: Address;
}
