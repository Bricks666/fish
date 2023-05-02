import { createApi } from '@reduxjs/toolkit/query/react';
import { web3BaseQuery } from '@old/api/core';
import { CreateShopParams, DeleteShopParams, GetShopParams, Shop, ShopResponse } from './types';
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

		getShop: builder.query<Shop, GetShopParams>({
			query: ({ shopId, }) => ({
				methodName: 'shops',
				methodArgs: [shopId],
			}),
			transformResponse: (baseQueryReturnValue: ShopResponse): Shop => {
				return converter(baseQueryReturnValue);
			},
			providesTags: ['Shops'],
		}),

		deleteShop: builder.mutation<void, DeleteShopParams>({
			query: ({ sender, shopId, }) => ({
				methodName: 'deleteShop',
				methodArgs: [shopId],
				sender,
			}),
			invalidatesTags: ['Shops'],
		}),

		createShop: builder.mutation<void, CreateShopParams>({
			query: ({ sender, city, login, shopAddress, shopName, }) => ({
				methodName: 'addShop',
				methodArgs: [shopAddress, login, shopName, city],
				sender,
			}),
			invalidatesTags: ['Shops'],
		}),
	}),
	tagTypes: ['Shops'],
});

export const { useGetShopsQuery, useGetShopQuery, useCreateShopMutation, useDeleteShopMutation, } =	shopsApi;
