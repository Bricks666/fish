import { VoidFunction } from '@/interfaces/common';
import { Address } from '@/interfaces/web3';

export interface Review {
	readonly id: number;
	readonly body: string;
	readonly subjectAddress: Address;
	readonly mark: number;
	readonly likes: Address[];
	readonly dislikes: Address[];
}

export interface ReviewsState {
	readonly isLoading: boolean;
	readonly subjectAddress: Address;
	readonly list: Review[];
	readonly subscribes: VoidFunction[];
}
