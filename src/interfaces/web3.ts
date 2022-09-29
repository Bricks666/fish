import { VoidFunction } from './common';

export type Address = string;

export interface Subscription {
	readonly unsubscribe: VoidFunction;
}
