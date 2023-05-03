import type { UserResponse } from '../api';

import { hexToNumberString } from 'web3-utils';

export const isEmptyUser = (user: UserResponse): Boolean => {
	return hexToNumberString(user.Address) === '0';
};
