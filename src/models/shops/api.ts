import { createApi } from '@reduxjs/toolkit/query/react';
import { web3BaseQuery } from '@/api/core';
import { Shop } from './types';
import { ShopResponse } from '@/interfaces/response';
import { converter } from './converter';

export const shopsApi = createApi({
	reducerPath: 'api/shops',
	baseQuery: web3BaseQuery(),
	endpoints: (builder) => ({
		getShops: builder.query<Shop[], undefined>({
			query: () => ({
				methodName: 'getShops',
			}),
			transformResponse: (baseQueryReturnValue: ShopResponse[]): Shop[] => {
				return baseQueryReturnValue.map(converter);
			},
			providesTags: ['Shops'],
		}),

		getShop: builder.query<Shop, number>({
			query: (id) => ({
				methodName: 'shops',
				methodArgs: [id],
			}),
			transformResponse: (baseQueryReturnValue: ShopResponse): Shop => {
				return converter(baseQueryReturnValue);
			},
			providesTags: ['Shops'],
		}),
	}),
	tagTypes: ['Shops'],
});

export const { useGetShopsQuery, useGetShopQuery } = shopsApi;
