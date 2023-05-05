import { ref, type Ref } from 'vue';

export interface CreateHandlessDataFetchParams<Result, DefaultValue extends Result | null> {
	readonly defaultValue?: DefaultValue;
}

export interface HandlessDataFetch<Result, DefaultValue extends Result | null> {
	readonly loading: Ref<boolean>;
	readonly error: Ref<Error | null>;
	readonly loaded: Ref<boolean>;
	readonly result: Ref<Result | DefaultValue>;
}

export const createHandlessDataFetch = <Result, DefaultValue extends Result | null = null>(
	params: CreateHandlessDataFetchParams<Result, DefaultValue>
): HandlessDataFetch<Result, DefaultValue> => {
	const { defaultValue, } = params;
	const loading = ref<boolean>(false);
	const error = ref<Error | null>(null);
	const loaded = ref<boolean>(false);
	const result = ref(defaultValue ?? (null as DefaultValue)) as Ref<Result | DefaultValue>;

	return { loading, error, loaded, result, };
};
