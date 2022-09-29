import { VoidFunction } from '@/interfaces/common';
import { User } from '../salesmen';

export interface UserState {
	readonly isLoading: boolean;
	readonly info: User;
	readonly unsubscribes: VoidFunction[];
}
