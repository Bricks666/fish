import { loginApi, registrationApi } from '../api';

const initialState = {
	isAuth: false,
	address: '',
	registrationError: null,
	loginError: null,
};

const SET_AUTH = 'auth/SET_AUTH';
const SET_LOGIN_ERROR = 'auth/SET_LOGIN_ERROR';
const SET_REGISTRATION_ERROR = 'auth/SET_REGISTRATION_ERROR';
export const LOGOUT = 'auth/LOGOUT';

export const authReducer = (state = initialState, { type, payload, }) => {
	switch (type) {
	case SET_AUTH: {
		return {
			...state,
			address: payload.address,
			isAuth: true,
		};
	}
	case SET_LOGIN_ERROR: {
		return {
			...state,
			loginError: payload.loginError,
		};
	}
	case SET_REGISTRATION_ERROR: {
		return {
			...state,
			registrationError: payload.registrationError,
		};
	}
	case LOGOUT: {
		return initialState;
	}
	default: {
		return state;
	}
	}
};

const setAuthAC = (address) => {
	return {
		type: SET_AUTH,
		payload: {
			address,
		},
	};
};

const setLoginErrorAC = (loginError) => {
	return {
		type: SET_LOGIN_ERROR,
		payload: {
			loginError,
		},
	};
};

const setRegistrationErrorAC = (registrationError) => {
	return {
		type: SET_REGISTRATION_ERROR,
		payload: {
			registrationError,
		},
	};
};

export const logoutAC = () => {
	return {
		type: LOGOUT,
	};
};

export const loginThunk = (address, login, password) => {
	return async (dispatch) => {
		try {
			await loginApi(address, login, password);
			dispatch(setAuthAC(address));
			dispatch(setLoginErrorAC(null));
			return true;
		} catch (e) {
			console.log(e);
			dispatch(
				setLoginErrorAC(
					'Пользователь не зарегистрирован/Невеный логин или паоль'
				)
			);
		}
	};
};

export const registrationThunk = (address, login, name) => {
	return async (dispatch) => {
		try {
			await registrationApi(address, login, name);
			dispatch(setRegistrationErrorAC(null));
			return true;
		} catch (e) {
			console.log(e);
			dispatch(setLoginErrorAC('Пользователь уже зарегистрирован'));
		}
	};
};
