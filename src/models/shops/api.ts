import { createApi } from '@reduxjs/toolkit/query/react';
import { web3BaseQuery } from '@/api/core';

export const shopsApi = createApi({
	reducerPath: 'api/shops',
	baseQuery: web3BaseQuery(),
	endpoints: (builder) => ({
		getShops: builder.query({
			query: () => ({
				methodName: '',
			}),
		}),
	}),
});
