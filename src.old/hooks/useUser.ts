import { defaultUser, useGetUserQuery } from '@old/models/users';
import { useLogin } from './useLogin';
import { zeroAddress } from '@old/consts';

export const useUser = () => {
	const [, { data: address = zeroAddress, }] = useLogin();
	const { data: info = defaultUser, isLoading, } = useGetUserQuery(address);

	return { info, isLoading, };
};
