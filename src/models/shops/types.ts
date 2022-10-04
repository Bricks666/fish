import { Address, SubscriptionResult } from '@/packages/web3';

export interface Shop {
	readonly id: number;
	readonly address: Address;
	readonly name: string;
	readonly city: string;
}

export interface ShopsState {
	readonly isLoading: boolean;
	readonly shops: Shop[];
	readonly unsubscribes: SubscriptionResult[];
}
