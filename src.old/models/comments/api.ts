import { createApi } from '@reduxjs/toolkit/query/react';
import { web3BaseQuery } from '@old/api/core';
import { AddCommentParams, Comment, CommentResponse, GetCommentsParams } from './types';
import { converter } from './converter';

export const commentsApi = createApi({
	reducerPath: 'api/comments',
	baseQuery: web3BaseQuery(),
	endpoints: (builder) => ({
		getComments: builder.query<Comment[], GetCommentsParams>({
			query: ({ reviewId, subjectAddress, }) => ({
				methodName: 'getComments',
				methodArgs: [subjectAddress, reviewId],
			}),
			transformResponse: (baseQueryReturnValue: CommentResponse[]): Comment[] => {
				return baseQueryReturnValue.map(converter);
			},
			providesTags: ['Comments'],
		}),
		addComment: builder.mutation<void, AddCommentParams>({
			query: ({ reviewId, sender, subjectAddress, text, }) => ({
				methodName: 'addComment',
				methodArgs: [subjectAddress, reviewId, text],
				sender,
			}),
			invalidatesTags: ['Comments'],
		}),
	}),
	tagTypes: ['Comments'],
});

export const { useAddCommentMutation, useGetCommentsQuery, } = commentsApi;
