import { Address } from '@/packages/web3';

export interface AuthState {
	readonly isAuth: boolean;
	readonly address: Address;
	readonly registrationError: string | null;
	readonly loginError: string | null;
}
