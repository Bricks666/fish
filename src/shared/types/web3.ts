import type { EventData } from 'web3-eth-contract';

export type Address = string;

export type SubscribeData = EventData['returnValues'];

export type SubscribeCallback<T extends SubscribeData> = (value: T) => SubscriptionResult;

export interface WithSenderParams {
	readonly sender: Address;
}

// For subscriptions
export interface SubscribeParams<T extends SubscribeData> {
	readonly event: string;
	readonly callback: SubscribeCallback<T>;
	readonly filter?: object;
}

export interface SubscriptionResult {
	readonly unsubscribe: () => unknown;
}
