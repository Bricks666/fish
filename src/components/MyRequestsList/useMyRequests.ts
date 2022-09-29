import * as React from 'react';
import {
	loadMyRequestsThunk,
	Request,
	subscribeMyChangeRequestStatusThunk,
	subscribeNewMyRequestThunk,
} from '@/models/requests';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';

export interface UseMyRequestsResult {
	readonly requests: Request[];
	readonly isLoading: boolean;
}

export const useMyRequests = (): UseMyRequestsResult => {
	const requests = useTypedSelector((state) => state.requests.myRequests);
	const isLoading = useTypedSelector((state) => state.requests.isLoading);
	const dispatch = useTypedDispatch();

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
