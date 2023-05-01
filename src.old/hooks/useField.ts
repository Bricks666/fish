import { ChangeEventHandler, useCallback, useState } from 'react';
import { VoidFunction } from '@/interfaces/common';

export interface UseFieldResult<T> {
	readonly value: T;
	readonly onChange: ChangeEventHandler;
	readonly reset: VoidFunction;
	readonly isDirty: boolean;
}

export const useField = <T>(defaultValue: T): UseFieldResult<T> => {
	const [value, setValue] = useState<T>(defaultValue);

	const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((evt) => {
		setValue(evt.target.value as T);
	}, []);

	const reset = useCallback<VoidFunction>(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	return { value, onChange, reset, isDirty: value !== defaultValue, };
};
