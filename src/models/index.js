import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { addressReducer } from './address';
import { authReducer } from './auth';
import { initReducer } from './init';
import { userReducer } from './user';
import { requestsReducer } from './requests';
import { shopsReducer } from './shops';
import { salesmenReducer } from './slesmen';
import { reviewsReducer } from './reviews';
import { commentsReducer } from './comments';

const rootReducer = combineReducers({
	init: initReducer,
	auth: authReducer,
	address: addressReducer,
	user: userReducer,
	requests: requestsReducer,
	shops: shopsReducer,
	salesmen: salesmenReducer,
	reviews: reviewsReducer,
	comments: commentsReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
