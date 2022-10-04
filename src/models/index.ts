import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { addressesApi } from './addresses';
import { authApi, authReducer } from './auth';
import { userReducer } from './user';
import { requestsReducer } from './requests';
import { shopsReducer } from './shops';
import { salesmenReducer } from './salesmen';
import { reviewsReducer } from './reviews';
import { commentsReducer } from './comments';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	requests: requestsReducer,
	shops: shopsReducer,
	salesmen: salesmenReducer,
	reviews: reviewsReducer,
	comments: commentsReducer,
	[addressesApi.reducerPath]: addressesApi.reducer,
	[authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware().concat(addressesApi.middleware).concat(authApi.middleware);
	},
});

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
