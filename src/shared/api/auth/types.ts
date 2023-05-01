import type { Address } from '@/shared/types';

export interface LoginParams {
	readonly address: Address;
	readonly login: string;
	readonly password: string;
}

export interface RegistrationParams {
	readonly address: Address;
	readonly login: string;
	readonly name: string;
}
