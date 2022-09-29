import { VoidFunction } from '@/interfaces/common';
import { Address } from '@/interfaces/web3';

export interface User {
	readonly login: string;
	readonly address: Address;
	readonly name: string;
	readonly role: number;
	readonly onRequest: boolean;
	readonly shopAddress?: Address | null;
}

export interface SalesmenState {
	readonly isLoading: boolean;
	readonly salesmen: User[];
	readonly subscribes: VoidFunction[];
}
