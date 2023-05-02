import { useLoginMutation } from '@old/models/auth';

export const useLogin = () => {
	return useLoginMutation({
		fixedCacheKey: 'login',
	});
};
