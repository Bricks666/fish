import type { Address } from '@/shared/types';

export interface Request {
	readonly id: number;
	readonly type: number;
	readonly sender: Address;
	readonly currentRole: number;
	readonly newRole: number;
	readonly status: number;
	readonly shopAddress?: Address | null;
}
