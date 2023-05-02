import { ROLES, zeroAddress } from '@old/consts';
import { User } from './types';

export const defaultUser: User = {
	address: zeroAddress,
	login: 'Guest',
	name: 'Guest',
	onRequest: false,
	role: ROLES.GUEST,
};
