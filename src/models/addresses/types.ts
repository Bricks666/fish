import { Address } from '@/interfaces/web3';

export interface AddressesState {
	readonly isLoading: boolean;
	readonly addresses: Address[];
	readonly userAddresses: Address[];
}
