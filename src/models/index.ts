import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { addressesApi } from './addresses';
import { authApi, authReducer } from './auth';
import { userApi } from './user';
import { requestsApi } from './requests';
import { shopsReducer } from './shops';
import { salesmenReducer } from './salesmen';
import { reviewsApi } from './reviews';
import { commentsApi } from './comments';

const rootReducer = combineReducers({
	auth: authReducer,
	shops: shopsReducer,
	salesmen: salesmenReducer,
	[reviewsApi.reducerPath]: reviewsApi.reducer,
	[requestsApi.reducerPath]: requestsApi.reducer,
	[commentsApi.reducerPath]: commentsApi.reducer,
	[addressesApi.reducerPath]: addressesApi.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware()
			.concat(addressesApi.middleware)
			.concat(authApi.middleware)
			.concat(userApi.middleware)
			.concat(commentsApi.middleware)
			.concat(requestsApi.middleware)
			.concat(reviewsApi.middleware);
	},
});

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
