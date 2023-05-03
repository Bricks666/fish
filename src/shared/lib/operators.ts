type AnyFunction = (...args: any) => any;

export const not = <F extends AnyFunction>(func: F): F => {
	return ((...args) => {
		return !func(...args);
	}) as F;
};
