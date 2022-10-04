import { PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { VoidFunction } from '@/interfaces/common';
import { SalesmenState, User } from './types';
import { getUserApi } from '@/api/user';
import { subscribe } from '@/api/core';
import { ROLES } from '@/consts';
import { getSalesmenAddressesApi } from '@/api/shops';
import { converter } from './converter';
import { Address } from '@/packages/web3';

const initialState: SalesmenState = {
	isLoading: false,
	salesmen: [],
	subscribes: [],
};

const SET_SALESMEN = 'salesmen/SET_SALESMEN';
const ADD_SALESMAN = 'salesmen/ADD_SALESMAN';
const DELETE_SALESMAN = 'salesmen/DELETE_SALESMAN';
const TOGGLE_LOADING = 'salesmen/TOGGLE_LOADING';
const SET_SUBSCRIBES = 'salesmen/SET_SUBSCRIBES';
const RESET = 'salesmen/RESET';

export const salesmenReducer = (
	state = initialState,
	{ type, payload }: PayloadAction<any>
): SalesmenState => {
	switch (type) {
		case SET_SALESMEN: {
			return {
				...state,
				salesmen: payload.salesmen,
			};
		}
		case ADD_SALESMAN: {
			return {
				...state,
				salesmen: [...state.salesmen, payload.salesman],
			};
		}
		case DELETE_SALESMAN: {
			return {
				...state,
				salesmen: state.salesmen.filter((salesman) => salesman.address !== payload.salesmanAddress),
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

const setSalesmenAC = (salesmen: User[]) => {
	return {
		type: SET_SALESMEN,
		payload: {
			salesmen,
		},
	};
};

const addSalesmanAC = (salesman: User) => {
	return {
		type: ADD_SALESMAN,
		payload: {
			salesman,
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

export const resetSalesmenAC = () => {
	return {
		type: RESET,
	};
};

export const loadSalesmenThunk = (shopAddress: Address) => {
	return async (dispatch: AppDispatch) => {
		dispatch(toggleLoadingAC(true));
		const salesmenAddresses = await getSalesmenAddressesApi(shopAddress);
		const salesmen = await Promise.all(salesmenAddresses.map(getUserApi));
		dispatch(setSalesmenAC(salesmen.map(converter)));
		dispatch(toggleLoadingAC(false));
	};
};

export const subscribeNewSalesmanThunk = (shopAddress: Address) => {
	return async (dispatch: AppDispatch) => {
		const subscribes = subscribe({
			event: 'changeRoleEvent',
			callback: async ({ Address }: { Address: Address }) => {
				const salesman = converter(await getUserApi(Address));
				if (salesman.shopAddress === shopAddress) {
					dispatch(addSalesmanAC(salesman));
				}
			},
			filter: {
				newRole: ROLES.SHOPER,
			},
		});

		dispatch(setSubscribesAC(subscribes));
	};
};
