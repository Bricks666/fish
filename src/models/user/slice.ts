import { PayloadAction } from '@reduxjs/toolkit';
import { getUserApi } from '@/api';
import { subscribe } from '@/api/core';
import { ROLES } from '@/consts';
import { LOGOUT } from '../auth';
import { UserState } from './types';
import { converter, User } from '../salesmen';
import { VoidFunction } from '@/interfaces/common';
import { AppDispatch, AppState } from '..';

const initialState: UserState = {
	isLoading: false,
	info: {
		login: '',
		address: '',
		name: '',
		role: ROLES.GUEST,
		onRequest: false,
		shopAddress: null,
	},
	unsubscribes: [],
};

const SET_INFO = 'user/SET_USER';
const TOGGLE_LOADING = 'user/TOGGLE_LOADING';
const CHANGE_ROLE = 'user/CHANGE_ROLE';
const SET_UNSUBSCRIBES = 'users/SET_UNSUBSCRIBES';

export const userReducer = (
	state = initialState,
	{ type, payload }: PayloadAction<any>
): UserState => {
	switch (type) {
		case SET_INFO: {
			return {
				...state,
				info: payload.info,
			};
		}
		case TOGGLE_LOADING: {
			return {
				...state,
				isLoading: payload.isLoading,
			};
		}
		case CHANGE_ROLE: {
			return {
				...state,
				info: {
					...state.info,
					role: payload.role,
				},
			};
		}
		case SET_UNSUBSCRIBES: {
			return {
				...state,
				unsubscribes: [...state.unsubscribes, ...payload.unsubscribe],
			};
		}
		case LOGOUT: {
			state.unsubscribes.forEach((unsubscribe) => unsubscribe.unsubscribe());
			return initialState;
		}
		default: {
			return state;
		}
	}
};

const setInfoAC = (info: User) => {
	return {
		type: SET_INFO,
		payload: {
			info,
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

const changeRoleAC = (role: number) => {
	return {
		type: CHANGE_ROLE,
		payload: {
			role,
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

export const loadUserThunk = () => {
	return async (dispatch: AppDispatch, getState: () => AppState) => {
		try {
			dispatch(toggleLoadingAC(true));
			const { address } = getState().auth;
			const response = await getUserApi(address);
			dispatch(setInfoAC(converter(response)));
			dispatch(toggleLoadingAC(false));
		} catch (e) {
			console.log(e);
		}
	};
};

export const subscribeChangeInfoThunk = () => {
	return async (dispatch: AppDispatch, getState: () => AppState) => {
		const { address } = getState().auth;

		const unsubscribe = subscribe({
			event: 'changeRoleEvent',
			callback: ({ newRole }: { newRole: number }) =>
				dispatch(changeRoleAC(newRole)),
			filter: { Address: address },
		});

		dispatch(setUnsubscribesAC(unsubscribe));
	};
};
