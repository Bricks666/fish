import { Address, SubscriptionResult } from '@/packages/web3';

export interface Request {
	readonly id: number;
	readonly type: number;
	readonly sender: Address;
	readonly currentRole: number;
	readonly newRole: number;
	readonly status: number;
	readonly shopAddress?: Address;
}

export interface RequestsState {
	readonly isLoading: boolean;
	readonly requests: Request[];
	readonly myRequests: Request[];
	readonly unsubscribes: SubscriptionResult[];
}
