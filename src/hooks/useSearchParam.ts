import { useSearchParams } from 'react-router-dom';

export const useSearchParam = (param, fallback) => {
	const [searchParams] = useSearchParams();

	return searchParams.get(param) || fallback;
};
