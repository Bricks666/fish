import type { EventData } from 'web3-eth-contract';

export type SubscribeData = EventData['returnValues'];

export type SubscribeCallback<T extends SubscribeData> = (value: T) => unknown;

export interface SubscribeParams<T extends SubscribeData> {
	readonly event: string;
	readonly callback: SubscribeCallback<T>;
	readonly filter?: object;
}
