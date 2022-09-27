import { useSearchParams } from 'react-router-dom';

export const useSearchParam = (
	param: string,
	fallback: string | null = null
): string | null => {
	const [searchParams] = useSearchParams();

	return searchParams.get(param) || fallback;
};
