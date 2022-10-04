import { Role } from '@/consts';
import { Address } from '@/packages/web3';

export interface User {
	readonly login: string;
	readonly address: Address;
	readonly name: string;
	readonly role: number;
	readonly onRequest: boolean;
	readonly shopAddress?: Address | null;
}

export interface UserResponse {
	readonly login: string;
	readonly Address: Address;
	readonly password: any;
	readonly FIO: string;
	readonly role: Role;
	readonly onRequest: boolean;
	readonly shopAddress?: Address;
}
