/* eslint-disable default-param-last */
import { PayloadAction } from '@reduxjs/toolkit';
import { addCommentApi, getCommentApi, getCommentsApi } from '@/api/comments';
import { subscribe } from '@/api/core';
import { converter } from './converter';
import { Comment, CommentsState } from './types';
import { VoidFunction } from '@/interfaces/common';
import { Address } from '@/interfaces/web3';
import { AppDispatch, AppState } from '..';

const initialState: CommentsState = {
	isLoading: false,
	list: [],
	subscribes: [],
};

const SET_COMMENTS = 'comments/SET_COMMENTS';
const ADD_COMMENT = 'comments/ADD_COMMENT';
const TOGGLE_LOADING = 'comments/TOGGLE_LOADING';
const SET_SUBSCRIBES = 'comments/SET_SUBSCRIBES';
const RESET = 'comments/RESET';

export const commentsReducer = (
	state = initialState,
	{ type, payload }: PayloadAction<any>
): CommentsState => {
	switch (type) {
		case SET_COMMENTS: {
			return {
				...state,
				list: payload.comments,
			};
		}
		case ADD_COMMENT: {
			return {
				...state,
				list: [...state.list, payload.comment],
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

const setCommentsAC = (comments: Comment[]) => {
	return {
		type: SET_COMMENTS,
		payload: {
			comments,
		},
	};
};

const addCommentAC = (comment: Comment) => {
	return {
		type: ADD_COMMENT,
		payload: {
			comment,
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

export const resetCommentsAC = () => {
	return {
		type: RESET,
	};
};

export const loadCommentsThunk = (subjectAddress: Address, reviewId: number) => {
	return async (dispatch: AppDispatch) => {
		dispatch(toggleLoadingAC(true));
		const comments = await getCommentsApi(subjectAddress, reviewId);
		dispatch(setCommentsAC(comments.map(converter)));
		dispatch(toggleLoadingAC(false));
	};
};

export const addCommentThunk = (subjectAddress: Address, reviewId: number, text: string) => {
	return async (_: AppDispatch, getState: () => AppState) => {
		const { address } = getState().auth;
		await addCommentApi(address, subjectAddress, reviewId, text);
	};
};

export const subscribeNewCommentThunk = (subjectAddress: Address, reviewId: number) => {
	return async (dispatch: AppDispatch) => {
		const subscription = subscribe({
			event: 'newComment',
			callback: async ({ idComment }: { idComment: number }) => {
				const comment = await getCommentApi(subjectAddress, reviewId, idComment);
				dispatch(addCommentAC(converter(comment)));
			},
			filter: { subjectAddress, reviewId },
		});

		dispatch(setSubscribesAC(subscription));
	};
};
