import { PayloadAction } from '@reduxjs/toolkit';
import { subscribe } from '@/api/core';
import {
	dislikeReviewApi,
	getReviewApi,
	getReviewsApi,
	likeReviewApi,
	addReviewApi,
} from '@/api';
import { Review, ReviewsState } from './types';
import { Address } from '@/interfaces/web3';
import { VoidFunction } from '@/interfaces/common';
import { AppDispatch, AppState } from '..';
import { converter } from './converter';

const initialState: ReviewsState = {
	isLoading: false,
	subjectAddress: '',
	list: [],
	subscribes: [],
};

const SET_REVIEWS = 'reviews/SET_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW';
const CHANGE_REVIEW = 'reviews/CHANGE_REVIEW';
const TOGGLE_LOADING = 'reviews/TOGGLE_LOADING';
const SET_SUBSCRIBES = 'reviews/SET_SUBSCRIBES';
const RESET = 'reviews/RESET';

export const reviewsReducer = (
	state = initialState,
	{ type, payload }: PayloadAction<any>
): ReviewsState => {
	switch (type) {
		case SET_REVIEWS: {
			return {
				...state,
				list: payload.reviews,
				subjectAddress: payload.subjectAddress,
			};
		}
		case ADD_REVIEW: {
			return {
				...state,
				list: [...state.list, payload.review],
			};
		}
		case CHANGE_REVIEW: {
			return {
				...state,
				list: state.list.map((review) => {
					return review.id === payload.review.id ? payload.review : review;
				}),
			};
		}
		case TOGGLE_LOADING: {
			return {
				...state,
				isLoading: payload.isLoading,
			};
		}
		case SET_SUBSCRIBES: {
			return {
				...state,
				subscribes: [...state.subscribes, ...payload.subscribes],
			};
		}
		case RESET: {
			state.subscribes.forEach((subscribe) => subscribe.unsubscribe());
			return initialState;
		}
		default: {
			return state;
		}
	}
};

const setReviewsAC = (reviews: Review[], subjectAddress: Address) => {
	return {
		type: SET_REVIEWS,
		payload: {
			reviews,
			subjectAddress,
		},
	};
};

const addReviewAC = (review: Review) => {
	return {
		type: ADD_REVIEW,
		payload: {
			review,
		},
	};
};
const changeReviewAC = (review: Review) => {
	return {
		type: CHANGE_REVIEW,
		payload: {
			review,
		},
	};
};

const toggleLoadingAC = (isLoading: boolean) => {
	return {
		type: TOGGLE_LOADING,
		payload: {
			isLoading,
		},
	};
};

const setSubscribesAC = (...subscribes: VoidFunction[]) => {
	return {
		type: SET_SUBSCRIBES,
		payload: {
			subscribes,
		},
	};
};

export const resetReviewsAC = () => {
	return {
		type: RESET,
	};
};

export const loadReviewsThunk = (subjectAddress: Address) => {
	return async (dispatch: AppDispatch) => {
		dispatch(toggleLoadingAC(true));
		const reviews = await getReviewsApi(subjectAddress);
		console.log(reviews);
		dispatch(setReviewsAC(reviews.map(converter), subjectAddress));
		dispatch(toggleLoadingAC(false));
	};
};

export const addReviewThunk = (
	subjectAddress: Address,
	text: string,
	mark: number
) => {
	return async (_, getState: () => AppState) => {
		const { address } = getState().auth;
		await addReviewApi(address, subjectAddress, text, mark);
	};
};

export const likeReviewThunk = (subjectAddress: Address, reviewId: number) => {
	return async (_, getState: () => AppState) => {
		const { address } = getState().auth;
		await likeReviewApi(address, subjectAddress, reviewId);
	};
};

export const dislikeReviewThunk = (
	subjectAddress: Address,
	reviewId: number
) => {
	return async (_, getState: () => AppState) => {
		const { address } = getState().auth;
		await dislikeReviewApi(address, subjectAddress, reviewId);
	};
};

export const subscribeNewReviewThunk = (subjectAddress: Address) => {
	return async (dispatch: AppDispatch) => {
		const subscription = subscribe({
			event: 'newReview',
			callback: async ({ id }: { id: number }) => {
				const review = await getReviewApi(subjectAddress, id);
				dispatch(addReviewAC(converter(review)));
			},
			filter: { subjectAddress },
		});

		dispatch(setSubscribesAC(subscription));
	};
};

export const subscribeChangeReviewThunk = (subjectAddress: Address) => {
	return async (dispatch: AppDispatch) => {
		const subscription = subscribe({
			event: 'markReview',
			callback: async ({ reviewId }: { reviewId: number }) => {
				const review = await getReviewApi(subjectAddress, reviewId);
				dispatch(changeReviewAC(converter(review)));
			},
			filter: { subjectAddress },
		});

		dispatch(setSubscribesAC(subscription));
	};
};
