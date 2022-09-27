import { getUserApi, getSalesmenAddressesApi } from '../api';
import { subscribe } from '../api/core';
import { toValidUser } from './utils/toValidUser';
import { ROLES } from '../consts';

const initialState = {
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

export const salesmenReducer = (state = initialState, { type, payload, }) => {
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
			salesmen: state.salesmen.filter(
				(salesman) => salesman.address !== payload.salesmanAddress
			),
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

const setSalesmenAC = (salesmen) => {
	console.log(salesmen);
	return {
		type: SET_SALESMEN,
		payload: {
			salesmen,
		},
	};
};

const addSalesmanAC = (salesman) => {
	return {
		type: ADD_SALESMAN,
		payload: {
			salesman,
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

export const resetSalesmenAC = () => {
	return {
		type: RESET,
	};
};

export const loadSalesmenThunk = (shopAddress) => {
	return async (dispatch) => {
		dispatch(toggleLoadingAC(true));
		const salesmenAddresses = await getSalesmenAddressesApi(shopAddress);
		const salesmen = await Promise.all(salesmenAddresses.map(getUserApi));
		dispatch(setSalesmenAC(salesmen.map(toValidUser)));
		dispatch(toggleLoadingAC(false));
	};
};

export const subscribeNewSalesmanThunk = (shopAddress) => {
	return async (dispatch) => {
		const subscribes = subscribe({
			event: 'changeRoleEvent',
			callback: async ({ Address, }) => {
				const salesman = toValidUser(await getUserApi(Address));
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
