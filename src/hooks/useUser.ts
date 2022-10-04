import { useLoginMutation } from '@/models/auth/api';
import { useGetUserQuery } from '@/models/user';

export const useUser = () => {
	const [, { data: address = '' }] = useLoginMutation({ fixedCacheKey: 'login' });
	const { data: info, isLoading } = useGetUserQuery(address);

	return { info, isLoading };
};
