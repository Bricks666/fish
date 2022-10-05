import { createApi } from '@reduxjs/toolkit/query/react';
import { web3BaseQuery } from '@/api/core';
import { User } from '../salesmen';
import { Address } from '@/packages/web3';
import { converter } from './converter';
import { UserResponse } from './types';

export const usersApi = createApi({
	reducerPath: 'api/user',
	baseQuery: web3BaseQuery(),
	endpoints: (builder) => ({
		getSalesmen: builder.query<User[], number>({
			query: (id) => ({
				methodName: 'getSalesmen',
				methodArgs: [id],
			}),

			transformResponse: (baseQueryReturnValue: UserResponse[]): User[] => {
				return baseQueryReturnValue.map(converter);
			},
		}),

		getUser: builder.query<User, Address>({
			query: (address) => ({
				methodName: 'users',
				methodArgs: [address],
			}),
			transformResponse: (baseQueryReturnValue: UserResponse): User => {
				return converter(baseQueryReturnValue);
			},
		}),

		getBalance: builder.query<string, Address>({
			query: (address) => ({
				methodName: 'getBalance',
				type: 'eth',
				methodArgs: [address],
			}),
			transformResponse: (baseQueryReturnValue: number): string => {
				return baseQueryReturnValue.toString();
			},
		}),
	}),
});

export const { useGetUserQuery, useGetBalanceQuery, useGetSalesmenQuery } = usersApi;
