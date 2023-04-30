import { createApi } from '@reduxjs/toolkit/query/react';
import { toHex } from 'web3-utils';
import { web3BaseQuery } from '@/api/core';
import { AddRequestParams, ChangeRequestStatusParams, Request, RequestResponse } from './types';
import { converter } from './converter';
import { Address } from '@/packages/web3';
import { filterMyRequests } from './filter';

export const requestsApi = createApi({
	reducerPath: 'api/requests',
	baseQuery: web3BaseQuery(),
	endpoints: (builder) => ({
		getAllRequests: builder.query<Request[], undefined>({
			query: () => ({
				methodName: 'getRequests',
			}),
			transformResponse: (baseQueryReturnValue: RequestResponse[]): Request[] => {
				return baseQueryReturnValue.map(converter);
			},
			providesTags: ['Requests'],
		}),

		getUserRequests: builder.query<Request[], Address>({
			query: () => ({
				methodName: 'getRequests',
			}),

			transformResponse: (baseQueryReturnValue: RequestResponse[], _, arg: Address): Request[] => {
				return filterMyRequests(baseQueryReturnValue, arg).map(converter);
			},
			providesTags: ['Requests'],
		}),

		addRequest: builder.mutation<void, AddRequestParams>({
			query: ({ sender, type, shopAddress = toHex(0) }) => ({
				methodName: 'addRequest',
				methodArgs: [type, shopAddress],
				sender,
			}),
			invalidatesTags: ['Requests'],
		}),
		acceptRequest: builder.mutation<void, ChangeRequestStatusParams>({
			query: ({ requestId, sender }) => ({
				methodName: 'acceptRequest',
				methodArgs: [requestId],
				sender,
			}),
			invalidatesTags: ['Requests'],
		}),
		cancelRequest: builder.mutation<void, ChangeRequestStatusParams>({
			query: ({ requestId, sender }) => ({
				methodName: 'cancelRequest',
				methodArgs: [requestId],
				sender,
			}),
			invalidatesTags: ['Requests'],
		}),
	}),
	tagTypes: ['Requests'],
});

export const {
	useAcceptRequestMutation,
	useAddRequestMutation,
	useCancelRequestMutation,
	useGetAllRequestsQuery,
	useGetUserRequestsQuery,
} = requestsApi;
