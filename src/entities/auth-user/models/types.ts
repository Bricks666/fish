import type { Address } from '@/shared/types';

export interface User {
	readonly login: string;
	readonly address: Address;
	readonly name: string;
	readonly role: number;
	readonly onRequest: boolean;
	readonly shopAddress?: Address | null;
}
