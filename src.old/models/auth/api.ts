import { createApi } from '@reduxjs/toolkit/query/react';
import { keccak256 } from 'web3-utils';
import { web3BaseQuery } from '@/api/core';
import { LoginParams } from './types';
import { Address } from '@/packages/web3';

export const authApi = createApi({
	reducerPath: 'api/auth',
	baseQuery: web3BaseQuery(),
	endpoints: (builder) => ({
		login: builder.mutation<Address, LoginParams>({
			query: ({ address, login, password, }) => ({
				methodName: 'login',
				methodArgs: [login, keccak256(password)],
				sender: address,
			}),
			transformResponse(baseQueryReturnValue, meta, arg) {
				return arg.address;
			},
		}),
	}),
});

export const { useLoginMutation, } = authApi;
