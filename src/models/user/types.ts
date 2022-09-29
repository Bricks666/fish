import { Subscription } from '@/interfaces/web3';
import { User } from '../salesmen';

export interface UserState {
	readonly isLoading: boolean;
	readonly info: User;
	readonly unsubscribes: Subscription[];
}
