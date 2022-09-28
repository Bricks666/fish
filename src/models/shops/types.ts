import { VoidFunction } from '@/interfaces/common';
import { Address } from '@/interfaces/web3';

export interface Shop {
	readonly id: number;
	readonly address: Address;
	readonly name: string;
	readonly city: string;
}

export interface ShopsState {
	readonly isLoading: boolean;
	readonly shops: Shop[];
	readonly unsubscribes: VoidFunction[];
}
