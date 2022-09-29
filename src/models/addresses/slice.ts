import { PayloadAction } from '@reduxjs/toolkit';
import { getAddressesApi, getUserAddressApi } from '@/api/address';
import { AddressesState } from './types';
import { Address } from '@/interfaces/web3';
import { AppDispatch } from '..';

const initialState: AddressesState = {
	isLoading: false,
	addresses: [],
	userAddresses: [],
};

const SET_ADDRESSES = 'address/SET_ADDRESSES';
const SET_USERS = 'addresses/SET_USERS';
const TOGGLE_LOADING = 'addresses/TOGGLE_LOADING';
const RESET = 'addresses/RESET';

export const addressReducer = (
	state = initialState,
	{ type, payload }: PayloadAction<any>
): AddressesState => {
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

const setAddressesAC = (addresses: Address[]) => {
	return {
		type: SET_ADDRESSES,
		payload: {
			addresses,
		},
	};
};

const setUsersAC = (userAddresses: Address[]) => {
	return {
		type: SET_USERS,
		payload: {
			userAddresses,
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
export const resetAddressAC = () => {
	return {
		type: RESET,
	};
};

export const loadAddressesThunk = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(toggleLoadingAC(true));
		const response = await getAddressesApi();
		dispatch(setAddressesAC(response));
		dispatch(toggleLoadingAC(false));
	};
};
export const loadUserAddressesThunk = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(toggleLoadingAC(true));
		const response = await getUserAddressApi();
		dispatch(setUsersAC(response));
		dispatch(toggleLoadingAC(false));
	};
};
