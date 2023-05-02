import { Address } from '@old/packages/web3';

export interface Review {
	readonly id: number;
	readonly body: string;
	readonly subjectAddress: Address;
	readonly mark: number;
	readonly likes: Address[];
	readonly dislikes: Address[];
}

export interface ReviewResponse {
	readonly id: string;
	readonly text: string;
	readonly subjectAddress: Address;
	readonly mark: string;
	readonly likes: Address[];
	readonly dislikes: Address[];
}

export interface GetReviewsParams {
	readonly subjectAddress: Address;
}

export interface GetReviewParams extends GetReviewsParams {
	readonly reviewId: number;
}

export interface AddReviewParams {
	readonly sender: Address;
	readonly subjectAddress: Address;
	readonly text: string;
	readonly mark: number;
}

export interface ChangeReviewStatusParams {
	readonly sender: Address;
	readonly subjectAddress: Address;
	readonly reviewId: number;
}
