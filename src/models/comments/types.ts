import { Address, SubscriptionResult } from '@/packages/web3';

export interface Comment {
	readonly id: number;
	readonly reviewId: number;
	readonly body: string;
	readonly author: Address;
}

export interface CommentsState {
	readonly isLoading: boolean;
	readonly list: Comment[];
	readonly subscribes: SubscriptionResult[];
}
