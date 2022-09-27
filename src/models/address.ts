import { contractBaseQuery } from '@/api/core';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getAddressesApi, getUserAddressApi } from '../api';

const initialState = {
	isLoading: false,
	addresses: [],
	userAddresses: [],
};

const SET_ADDRESSES = 'address/SET_ADDRESSES';
const SET_USERS = 'addresses/SET_USERS';
const TOGGLE_LOADING = 'addresses/TOGGLE_LOADING';
const RESET = 'addresses/RESET';

export const api = createApi({
	baseQuery: contractBaseQuery(),
	endpoints: (builder) => ({
		test: builder.query({
			query: () => ({
				url: '/',
			}),
		}),
	}),
});

export const addressReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_ADDRESSES: {
			return {
				...state,
				addresses: payload.addresses,
			};
		}
		case SET_USERS: {
			return {
				...state,
				userAddresses: payload.userAddresses,
			};
		}
		case TOGGLE_LOADING: {
			return {
				...state,
				isLoading: payload.isLoading,
			};
		}
		case RESET: {
			return initialState;
		}
		default: {
			return state;
		}
	}
};

const setAddressesAC = (addresses) => {
	return {
		type: SET_ADDRESSES,
		payload: {
			addresses,
		},
	};
};

const setUsersAC = (userAddresses) => {
	return {
		type: SET_USERS,
		payload: {
			userAddresses,
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
export const resetAddressAC = () => {
	return {
		type: RESET,
	};
};

export const loadAddressesThunk = () => {
	return async (dispatch) => {
		dispatch(toggleLoadingAC(true));
		const response = await getAddressesApi();
		dispatch(setAddressesAC(response));
		dispatch(toggleLoadingAC(false));
	};
};
export const loadUserAddressesThunk = () => {
	return async (dispatch) => {
		dispatch(toggleLoadingAC(true));
		const response = await getUserAddressApi();
		dispatch(setUsersAC(response));
		dispatch(toggleLoadingAC(false));
	};
};
