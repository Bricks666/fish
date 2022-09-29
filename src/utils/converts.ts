import { Unit, fromWei } from 'web3-utils';

export const convert = (value: string | number, unit: Unit): string => {
	return fromWei(value.toString(), unit);
};
