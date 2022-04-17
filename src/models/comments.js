import { addCommentApi, getCommentApi, getCommentsApi } from "../api";
import { subscribe } from "../api/core";
import { toValidComment } from "./utils/toValidComment";

const initialState = {
	isLoading: false,
	list: [],
	subscribes: [],
};

const SET_COMMENTS = "comments/SET_COMMENTS";
const ADD_COMMENT = "comments/ADD_COMMENT";
const TOGGLE_LOADING = "comments/TOGGLE_LOADING";
const SET_SUBSCRIBES = "comments/SET_SUBSCRIBES";
const RESET = "comments/RESET";

export const commentsReducer = (state = initialState, { type, payload }) => {
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

const setCommentsAC = (comments) => {
	return {
		type: SET_COMMENTS,
		payload: {
			comments,
		},
	};
};

const addCommentAC = (comment) => {
	return {
		type: ADD_COMMENT,
		payload: {
			comment,
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

export const resetCommentsAC = () => {
	return {
		type: RESET,
	};
};

export const loadCommentsThunk = (subjectAddress, reviewId) => {
	return async (dispatch) => {
		dispatch(toggleLoadingAC(true));
		const comments = await getCommentsApi(subjectAddress, reviewId);
		dispatch(setCommentsAC(comments.map(toValidComment)));
		dispatch(toggleLoadingAC(false));
	};
};

export const addCommentThunk = (subjectAddress, reviewId, text) => {
	return async (_, getState) => {
		const { address } = getState().auth;
		await addCommentApi(address, subjectAddress, reviewId, text);
	};
};

export const subscribeNewCommentThunk = (subjectAddress, reviewId) => {
	return async (dispatch) => {
		const subscription = subscribe({
			event: "newComment",
			callback: async ({ idComment }) => {
				const comment = await getCommentApi(
					subjectAddress,
					reviewId,
					idComment
				);
				dispatch(addCommentAC(toValidComment(comment)));
			},
			filter: { subjectAddress, reviewId },
		});

		dispatch(setSubscribesAC(subscription));
	};
};
