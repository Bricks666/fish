import {
	createHandlessDataFetch,
	type CreateHandlessDataFetchParams,
	type HandlessDataFetch,
} from './create-handless-data-fetch';

type FetchHandler<Result, Args extends Array<unknown>> = (
	...args: Args
) => Promise<Result> | Result;

export interface CreateDataFetchParams<
	Result,
	Args extends Array<unknown>,
	DefaultValue extends Mapped | null,
	Mapped
> extends CreateHandlessDataFetchParams<Mapped, DefaultValue> {
	readonly handler: FetchHandler<Result, Args>;
	readonly mapResult?: (result: Result) => Mapped;
}

export interface DataFetch<
	Result,
	Args extends Array<unknown>,
	DefaultValue extends Mapped | null,
	Mapped
> extends HandlessDataFetch<Mapped, DefaultValue> {
	readonly start: FetchHandler<Result, Args>;
}

export const createDataFetch = <
	Result,
	Args extends Array<unknown>,
	DefaultValue extends Mapped | null = null,
	Mapped = Result
>(
	params: CreateDataFetchParams<Result, Args, DefaultValue, Mapped>
): DataFetch<Result, Args, DefaultValue, Mapped> => {
	const { handler, defaultValue, mapResult } = params;
	const { error, loaded, loading, result } = createHandlessDataFetch<Mapped, DefaultValue>({
		defaultValue,
	});

	const start = async (...args: Args) => {
		loading.value = true;
		try {
			let data = await handler(...args);
			if (mapResult) {
				data = mapResult(data) as any;
			}
			result.value = data as any;
			loaded.value = false;
		} catch (err) {
			error.value = err as Error;
		} finally {
			loading.value = false;
		}
		return result.value as Result;
	};

	return { loading, error, loaded, result, start };
};
