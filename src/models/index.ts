import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { addressReducer } from './addresses';
import { authReducer } from './auth';
import { userReducer } from './user';
import { requestsReducer } from './requests';
import { shopsReducer } from './shops';
import { salesmenReducer } from './salesmen';
import { reviewsReducer } from './reviews';
import { commentsReducer } from './comments';

const rootReducer = combineReducers({
	auth: authReducer,
	address: addressReducer,
	user: userReducer,
	requests: requestsReducer,
	shops: shopsReducer,
	salesmen: salesmenReducer,
	reviews: reviewsReducer,
	comments: commentsReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
