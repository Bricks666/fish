import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { addressesApi } from './addresses';
import { authApi } from './auth';
import { usersApi } from './users';
import { requestsApi } from './requests';
import { shopsApi } from './shops';
import { reviewsApi } from './reviews';
import { commentsApi } from './comments';

const rootReducer = combineReducers({
	[shopsApi.reducerPath]: shopsApi.reducer,
	[reviewsApi.reducerPath]: reviewsApi.reducer,
	[requestsApi.reducerPath]: requestsApi.reducer,
	[commentsApi.reducerPath]: commentsApi.reducer,
	[addressesApi.reducerPath]: addressesApi.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[usersApi.reducerPath]: usersApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware()
			.concat(addressesApi.middleware)
			.concat(authApi.middleware)
			.concat(usersApi.middleware)
			.concat(commentsApi.middleware)
			.concat(requestsApi.middleware)
			.concat(reviewsApi.middleware)
			.concat(shopsApi.middleware);
	},
});

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
