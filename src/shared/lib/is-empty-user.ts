import { hexToNumberString } from 'web3-utils';
import type { UserResponse } from '../api';

export const isEmptyUser = (user: UserResponse): boolean => {
	return hexToNumberString(user.Address) === '0';
};
