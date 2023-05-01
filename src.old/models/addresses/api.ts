import { createApi } from '@reduxjs/toolkit/query/react';
import { web3BaseQuery } from '@/api/core';
import { Address } from '@/packages/web3';

export const addressesApi = createApi({
	reducerPath: 'api/addresses',
	baseQuery: web3BaseQuery(),
	endpoints: (builder) => ({
		getAddresses: builder.query<Address[], any>({
			query: () => ({
				methodName: 'getAccounts',
				type: 'eth',
			}),
			extraOptions: {},
		}),
		getUserAddresses: builder.query<Address[], any>({
			query: () => ({
				methodName: 'getUsersAddresses',
			}),

			extraOptions: {},
		}),
	}),
});

export const { useGetAddressesQuery, useGetUserAddressesQuery, } = addressesApi;
