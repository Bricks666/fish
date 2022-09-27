import { getUserApi } from '../api';
import { subscribe } from '../api/core';
import { ROLES } from '../consts';
import { LOGOUT } from './auth';
import { toValidUser } from './utils/toValidUser';

const initialState = {
	isLoading: false,
	info: {
		login: '',
		address: '',
		name: '',
		role: ROLES.GUEST,
		shopAddress: null,
	},
	unsubscribes: [],
};

const SET_INFO = 'user/SET_USER';
const TOGGLE_LOADING = 'user/TOGGLE_LOADING';
const CHANGE_ROLE = 'user/CHANGE_ROLE';
const SET_UNSUBSCRIBES = 'users/SET_UNSUBSCRIBES';

export const userReducer = (state = initialState, { type, payload, }) => {
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

const setInfoAC = (info) => {
	return {
		type: SET_INFO,
		payload: {
			info,
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

const changeRoleAC = (role) => {
	return {
		type: CHANGE_ROLE,
		payload: {
			role,
		},
	};
};

const setUnsubscribesAC = (...unsubscribes) => {
	return {
		type: SET_UNSUBSCRIBES,
		payload: {
			unsubscribes,
		},
	};
};

export const loadUserThunk = () => {
	return async (dispatch, getState) => {
		try {
			dispatch(toggleLoadingAC(true));
			const { address, } = getState().auth;
			const response = await getUserApi(address);
			dispatch(setInfoAC(toValidUser(response)));
			dispatch(toggleLoadingAC(false));
		} catch (e) {
			console.log(e);
		}
	};
};

export const subscribeChangeInfoThunk = () => {
	return async (dispatch, getState) => {
		const { address, } = getState().auth;

		const unsubscribe = subscribe({
			event: 'changeRoleEvent',
			callback: ({ newRole, }) => dispatch(changeRoleAC(newRole)),
			filter: { Address: address, },
		});

		dispatch(setUnsubscribesAC(unsubscribe));
	};
};
