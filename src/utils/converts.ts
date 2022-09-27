import { Unit, fromWei } from 'web3-utils';

export const convert = (value: string, unit: Unit): string => {
	return fromWei(value, unit);
};
