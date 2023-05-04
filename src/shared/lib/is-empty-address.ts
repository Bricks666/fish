import { hexToNumberString } from 'web3-utils';
import type { Address } from '../types';

export const isEmptyAddress = (address: Address | undefined | null): boolean => {
	return !address || hexToNumberString(address) === '0';
};
