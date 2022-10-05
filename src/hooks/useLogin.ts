import { useLoginMutation } from '@/models/auth';

export const useLogin = () => {
	return useLoginMutation({
		fixedCacheKey: 'login',
	});
};
