import { PayloadAction } from '@reduxjs/toolkit';
import {
	addShopApi,
	deleteShopApi,
	getShopAddressesApi,
	getShopApi,
} from '@/api';
import { subscribe } from '@/api/core';
import { Shop, ShopsState } from './types';
import { Address } from '@/interfaces/web3';
import { VoidFunction } from '@/interfaces/common';
import { AppDispatch, AppState } from '..';

const initialState: ShopsState = {
	isLoading: false,
	shops: [],
	unsubscribes: [],
};

const SET_SHOPS = 'shops/SET_SHOPS';
const ADD_SHOP = 'shops/ADD_SHOP';
const DELETE_SHOP = 'shops/DELETE_SHOP';
const TOGGLE_LOADING = 'shops/TOGGLE_LOADING';
const CHANGE_SHOP = 'shops/CHANGE_SHOP';
const SET_UNSUBSCRIBES = 'shops/SET_UNSUBSCRIBES';
const RESET = 'shops/RESET';

export const shopsReducer = (
	state = initialState,
	{ type, payload }: PayloadAction<any>
): ShopsState => {
	switch (type) {
		case SET_SHOPS: {
			return {
				...state,
				shops: payload.shops,
			};
		}
		case ADD_SHOP: {
			return {
				...state,
				shops: [...state.shops, payload.shop],
			};
		}
		case DELETE_SHOP: {
			return {
				...state,
				shops: state.shops.filter(
					(shop) => shop.address !== payload.shopAddress
				),
			};
		}
		case TOGGLE_LOADING: {
			return {
				...state,
				isLoading: payload.isLoading,
			};
		}
		case CHANGE_SHOP: {
			return {
				...state,
				shops: state.shops.map((shop) => {
					return shop.id === payload.shop.id ? payload.shop : shop;
				}),
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

const setShopsAC = (shops: Shop[]) => {
	return {
		type: SET_SHOPS,
		payload: {
			shops,
		},
	};
};

const addShopAC = (shop: Shop) => {
	return {
		type: ADD_SHOP,
		payload: {
			shop,
		},
	};
};

const deleteShopAC = (shopAddress: Address) => {
	return {
		type: DELETE_SHOP,
		payload: {
			shopAddress,
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

export const resetShopsAC = () => {
	return {
		type: RESET,
	};
};

export const loadShopsThunk = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(toggleLoadingAC(true));
		const addresses = await getShopAddressesApi();
		const shops = await Promise.all(addresses.map(getShopApi));
		const shopsWithSalesmen = shops.filter((shop) => shop.city !== '');
		dispatch(setShopsAC(shopsWithSalesmen));
		dispatch(toggleLoadingAC(false));
	};
};

export const deleteShopThunk = (shopAddress: Address) => {
	return async (_, getState: () => AppState) => {
		const { address } = getState().auth;
		await deleteShopApi(address, shopAddress);
	};
};
export const addShopThunk = (
	shopAddress: Address,
	login: string,
	name: string,
	city: string
) => {
	return async (_, getState: () => AppState) => {
		const { address } = getState().auth;
		await addShopApi(address, shopAddress, login, name, city);
	};
};
export const subscribeNewShopThunk = () => {
	return async (dispatch: AppDispatch) => {
		const unsubscribe = subscribe({
			event: 'newShop',
			callback: async ({ Address }: { Address: Address }) => {
				const shop = await getShopApi(Address);
				dispatch(addShopAC(shop));
			},
		});
		dispatch(setUnsubscribesAC(unsubscribe));
	};
};

export const subscribeDeleteShopThunk = () => {
	return async (dispatch: AppDispatch) => {
		const unsubscribe = subscribe({
			event: 'delShop',
			callback: ({ Address }: { Address: Address }) =>
				dispatch(deleteShopAC(Address)),
		});
		dispatch(setUnsubscribesAC(unsubscribe));
	};
};
