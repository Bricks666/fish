import { initApi } from '../api/core';

const initialState = {
	isInitializing: true,
};

const TOGGLE_INIT = 'init/TOGGLE_INIT';

export const initReducer = (state = initialState, { type, payload, }) => {
	if (type === TOGGLE_INIT) {
		return {
			...state,
			isInitializing: payload.isInitializing,
		};
	}
	return state;
};

const toggleInitAC = (isInitializing) => {
	return {
		type: TOGGLE_INIT,
		payload: {
			isInitializing,
		},
	};
};

export const initThunk = () => {
	return async (dispatch) => {
		dispatch(toggleInitAC(true));
		initApi();
		dispatch(toggleInitAC(false));
	};
};
