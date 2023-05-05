import type { AnyFunction } from '@/shared/types';

export const arrayMapper =
	<F extends AnyFunction>(map: F) =>
	(items: Parameters<F>[0][]): ReturnType<F>[] => {
		return items.map(map);
	};
