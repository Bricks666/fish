import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	loadMyRequestsThunk,
	subscribeMyChangeRequestStatusThunk,
	subscribeNewMyRequestThunk,
} from '@/models/requests';

export interface UseMyRequestsResult {
	readonly requests: unknown[];
	readonly isLoading: boolean;
}

export const useMyRequests = (): UseMyRequestsResult => {
	const requests = useSelector((state) => state.requests.myRequests);
	const isLoading = useSelector((state) => state.requests.isLoading);
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (!requests.length) {
			dispatch(loadMyRequestsThunk());
			dispatch(subscribeMyChangeRequestStatusThunk());
			dispatch(subscribeNewMyRequestThunk());
		}
	}, [requests.length, dispatch]);

	return {
		requests,
		isLoading,
	};
};
