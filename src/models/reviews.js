import { subscribe } from '../api/core';
import {
	dislikeReviewApi,
	getReviewApi,
	getReviewsApi,
	likeReviewApi,
	addReviewApi
} from '../api';
import { toValidReview } from './utils/toValidReview';

const initialState = {
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

export const reviewsReducer = (state = initialState, { type, payload, }) => {
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
		debugger;
		return {
			...state,
			list: state.list.map((review) =>
				(review.id === payload.review.id ? payload.review : review)),
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

const setReviewsAC = (reviews, subjectAddress) => {
	return {
		type: SET_REVIEWS,
		payload: {
			reviews,
			subjectAddress,
		},
	};
};

const addReviewAC = (review) => {
	return {
		type: ADD_REVIEW,
		payload: {
			review,
		},
	};
};
const changeReviewAC = (review) => {
	return {
		type: CHANGE_REVIEW,
		payload: {
			review,
		},
	};
};

const toggleLoadingAC = (isLoading) => {
	return {
		type: TOGGLE_LOADING,
		payload: {
			isLoading,
		},
	};
};

const setSubscribesAC = (...subscribes) => {
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

export const loadReviewsThunk = (subjectAddress) => {
	return async (dispatch) => {
		dispatch(toggleLoadingAC(true));
		const reviews = await getReviewsApi(subjectAddress);
		console.log(reviews);
		dispatch(setReviewsAC(reviews.map(toValidReview), subjectAddress));
		dispatch(toggleLoadingAC(false));
	};
};

export const addReviewThunk = (subjectAddress, text, mark) => {
	return async (_, getState) => {
		const { address, } = getState().auth;
		await addReviewApi(address, subjectAddress, text, mark);
	};
};

export const likeReviewThunk = (subjectAddress, reviewId) => {
	return async (_, getState) => {
		const { address, } = getState().auth;
		console.log(address);
		await likeReviewApi(address, subjectAddress, reviewId);
	};
};

export const dislikeReviewThunk = (subjectAddress, reviewId) => {
	return async (_, getState) => {
		const { address, } = getState().auth;
		console.log(address);
		await dislikeReviewApi(address, subjectAddress, reviewId);
	};
};

export const subscribeNewReviewThunk = (subjectAddress) => {
	return async (dispatch) => {
		const subscription = subscribe({
			event: 'newReview',
			callback: async ({ id, }) => {
				const review = await getReviewApi(subjectAddress, id);
				dispatch(addReviewAC(toValidReview(review)));
			},
			filter: { subjectAddress, },
		});

		dispatch(setSubscribesAC(subscription));
	};
};

export const subscribeChangeReviewThunk = (subjectAddress) => {
	return async (dispatch) => {
		const subscription = subscribe({
			event: 'markReview',
			callback: async ({ reviewId, }) => {
				const review = await getReviewApi(subjectAddress, reviewId);
				console.log(review);
				dispatch(changeReviewAC(toValidReview(review)));
			},
			filter: { subjectAddress, },
		});

		dispatch(setSubscribesAC(subscription));
	};
};
