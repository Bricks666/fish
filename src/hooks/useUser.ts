import { defaultUser, useGetUserQuery } from '@/models/users';
import { useLogin } from './useLogin';
import { zeroAddress } from '@/consts';

export const useUser = () => {
	const [, { data: address = zeroAddress }] = useLogin();
	const { data: info = defaultUser, isLoading } = useGetUserQuery(address);

	return { info, isLoading };
};
