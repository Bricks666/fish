import { useGetUserQuery } from '@/models/user';
import { useLogin } from './useLogin';

export const useUser = () => {
	const [, { data: address = '' }] = useLogin();
	const { data: info, isLoading } = useGetUserQuery(address);

	return { info, isLoading };
};
