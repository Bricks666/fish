import { PayloadAction } from '@reduxjs/toolkit';
import {
	acceptRequestApi,
	addRequestApi,
	cancelRequestApi,
	getRequestApi,
	getRequestsApi,
} from '@/api';
import { subscribe } from '@/api/core';
import { VoidFunction } from '@/interfaces/common';
import { Address } from '@/interfaces/web3';
import { AppDispatch, AppState } from '..';
import { converter } from './converter';
import { filterMyRequests } from './filter';
import { Request, RequestsState } from './types';

const initialState: RequestsState = {
	isLoading: false,
	requests: [],
	myRequests: [],
	unsubscribes: [],
};

const SET_REQUESTS = 'requests/SET_REQUESTS';
const ADD_REQUEST = 'requests/ADD_REQUESTS';
const CHANGE_STATUS_REQUEST = 'requests/CHANGE_STATUS_REQUESTS';
const SET_MY_REQUESTS = 'requests/SET_MY_REQUESTS';
const CHANGE_STATUS_MY_REQUEST = 'requests/CHANGE_STATUS_MY_REQUESTS';
const ADD_MY_REQUEST = 'requests/ADD_MY_REQUESTS';
const TOGGLE_LOADING = 'requests/TOGGLE_LOADING';
const SET_UNSUBSCRIBES = 'requests/SET_UNSUBSCRIBES';
const RESET = 'requests/RESET';

export const requestsReducer = (
	state = initialState,
	{ type, payload }: PayloadAction<any>
): RequestsState => {
	switch (type) {
		case SET_REQUESTS: {
			return {
				...state,
				requests: payload.requests,
			};
		}
		case ADD_REQUEST: {
			return {
				...state,
				requests: [...state.requests, payload.request],
			};
		}
		case CHANGE_STATUS_REQUEST: {
			return {
				...state,
				requests: state.requests.map((request) => {
					return request.id === payload.requestId
						? { ...request, status: payload.status }
						: request;
				}),
			};
		}
		case SET_MY_REQUESTS: {
			return {
				...state,
				myRequests: payload.myRequests,
			};
		}
		case ADD_MY_REQUEST: {
			return {
				...state,
				myRequests: [...state.myRequests, payload.myRequest],
			};
		}
		case CHANGE_STATUS_MY_REQUEST: {
			return {
				...state,
				myRequests: state.myRequests.map((request) => {
					return request.id === payload.requestId
						? { ...request, status: payload.status }
						: request;
				}),
			};
		}
		case TOGGLE_LOADING: {
			return {
				...state,
				isLoading: payload.isLoading,
			};
		}
		case SET_UNSUBSCRIBES: {
			return {
				...state,
				unsubscribes: [...state.unsubscribes, ...payload.unsubscribes],
			};
		}
		case RESET: {
			state.unsubscribes.forEach((unsubscribe) => unsubscribe.unsubscribe());
			return initialState;
		}
		default: {
			return state;
		}
	}
};

const setRequestsAC = (requests: Request[]) => {
	return {
		type: SET_REQUESTS,
		payload: {
			requests,
		},
	};
};

const setMyRequestsAC = (myRequests: Request[]) => {
	return {
		type: SET_MY_REQUESTS,
		payload: {
			myRequests,
		},
	};
};

const addRequestAC = (request: Request) => {
	return {
		type: ADD_REQUEST,
		payload: {
			request,
		},
	};
};
const changeStatusRequestAC = (requestId: number, status: number) => {
	return {
		type: CHANGE_STATUS_REQUEST,
		payload: {
			requestId,
			status,
		},
	};
};

const addMyRequestAC = (myRequest: Request) => {
	return {
		type: ADD_MY_REQUEST,
		payload: {
			myRequest,
		},
	};
};
const changeStatusMyRequestAC = (requestId: number, status: number) => {
	return {
		type: CHANGE_STATUS_MY_REQUEST,
		payload: {
			requestId,
			status,
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

const setUnsubscribesAC = (...unsubscribes: VoidFunction[]) => {
	return {
		type: SET_UNSUBSCRIBES,
		payload: {
			unsubscribes,
		},
	};
};

export const resetRequestsAC = () => {
	return {
		type: RESET,
	};
};

export const loadRequestsThunk = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(toggleLoadingAC(true));
			const response = await getRequestsApi();
			dispatch(setRequestsAC(response.map(converter)));
			dispatch(toggleLoadingAC(false));
		} catch (e) {
			console.log(e);
		}
	};
};

export const loadMyRequestsThunk = () => {
	return async (dispatch: AppDispatch, getState: () => AppState) => {
		const { address } = getState().auth;
		try {
			dispatch(toggleLoadingAC(true));
			const response = await getRequestsApi();
			dispatch(
				setMyRequestsAC(filterMyRequests(response, address).map(converter))
			);
			dispatch(toggleLoadingAC(false));
		} catch (e) {
			console.log(e);
		}
	};
};

export const subscribeNewRequestThunk = () => {
	return async (dispatch: AppDispatch) => {
		const subscribeNewRequest = subscribe({
			event: 'newRequest',
			callback: async ({ id }: { id: number }) => {
				const request = await getRequestApi(id);
				dispatch(addRequestAC(converter(request)));
			},
		});
		dispatch(setUnsubscribesAC(subscribeNewRequest));
	};
};
export const subscribeChangeRequestStatusThunk = () => {
	return async (dispatch: AppDispatch) => {
		const subscribeNewRequest = subscribe({
			event: 'newStatusRequest',
			callback: ({ id, status }: { id: number; status: number }) =>
				dispatch(changeStatusRequestAC(+id, status)),
		});
		dispatch(setUnsubscribesAC(subscribeNewRequest));
	};
};

export const subscribeNewMyRequestThunk = () => {
	return async (dispatch: AppDispatch, getState: () => AppState) => {
		const { address } = getState().auth;
		const subscribeNewRequest = subscribe({
			event: 'newRequest',
			callback: async ({ id }: { id: number }) => {
				const request = await getRequestApi(id);
				dispatch(addMyRequestAC(converter(request)));
			},
			filter: { AddressSender: address },
		});
		dispatch(setUnsubscribesAC(subscribeNewRequest));
	};
};
export const subscribeMyChangeRequestStatusThunk = () => {
	return async (dispatch: AppDispatch, getState: () => AppState) => {
		const { address } = getState().auth;
		const subscribeNewRequest = subscribe({
			event: 'newStatusRequest',
			callback: ({ id, status }: { id: number; status: number }) =>
				dispatch(changeStatusMyRequestAC(+id, status)),
			filter: { Address: address },
		});
		dispatch(setUnsubscribesAC(subscribeNewRequest));
	};
};

export const addRequestThunk = (type: number, shopAddress: Address) => {
	return async (_, getState: () => AppState) => {
		const { address } = getState().auth;
		await addRequestApi(address, type, shopAddress);
	};
};

export const acceptRequestThunk = (id: number) => {
	return async (_, getState: () => AppState) => {
		const { address } = getState().auth;
		await acceptRequestApi(address, id);
	};
};

export const cancelRequestThunk = (id: number) => {
	return async (_, getState: () => AppState) => {
		const { address } = getState().auth;
		await cancelRequestApi(address, id);
	};
};
