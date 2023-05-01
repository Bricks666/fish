import { createApi } from '@reduxjs/toolkit/query/react';
import { web3BaseQuery } from '@/api/core';
import {
	AddReviewParams,
	ChangeReviewStatusParams,
	GetReviewParams,
	GetReviewsParams,
	Review
} from './types';

export const reviewsApi = createApi({
	reducerPath: 'api/reviews',
	baseQuery: web3BaseQuery(),
	endpoints: (builder) => ({
		getReviews: builder.query<Review[], GetReviewsParams>({
			query: ({ subjectAddress, }) => ({
				methodName: 'getReviews',
				methodArgs: [subjectAddress],
			}),
			providesTags: ['Reviews'],
		}),
		getReview: builder.query<Review, GetReviewParams>({
			query: ({ subjectAddress, reviewId, }) => ({
				methodName: 'getReview',
				methodArgs: [subjectAddress, reviewId],
			}),
			providesTags: ['Reviews'],
		}),
		addReview: builder.mutation<void, AddReviewParams>({
			query: ({ mark, sender, subjectAddress, text, }) => ({
				methodName: 'addReview',
				methodArgs: [subjectAddress, text, mark],
				sender,
			}),
			invalidatesTags: ['Reviews'],
		}),
		likeReview: builder.mutation<void, ChangeReviewStatusParams>({
			query: ({ sender, subjectAddress, }) => ({
				methodName: 'likeReview',
				methodArgs: [subjectAddress],
				sender,
			}),
			invalidatesTags: ['Reviews'],
		}),
		dislikeReview: builder.mutation<void, ChangeReviewStatusParams>({
			query: ({ sender, subjectAddress, }) => ({
				methodName: 'dislikeReview',
				methodArgs: [subjectAddress],
				sender,
			}),
			invalidatesTags: ['Reviews'],
		}),
	}),
	tagTypes: ['Reviews'],
});

export const {
	useAddReviewMutation,
	useDislikeReviewMutation,
	useGetReviewsQuery,
	useLikeReviewMutation,
	useGetReviewQuery,
} = reviewsApi;
