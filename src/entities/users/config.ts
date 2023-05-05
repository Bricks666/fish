import { toHex } from 'web3-utils';
import { ROLES } from '@/shared/config';
import type { User } from './types';

export const guest: User = {
	address: toHex(0),
	login: 'Guest',
	name: 'Guest',
	onRequest: false,
	role: ROLES.GUEST,
	shopAddress: null,
};
