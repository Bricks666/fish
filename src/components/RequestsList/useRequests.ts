import { useEffect } from 'react';
import {
	loadRequestsThunk,
	Request,
	subscribeChangeRequestStatusThunk,
	subscribeNewRequestThunk,
} from '@/models/requests';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';

export interface UseRequestsResult {
	readonly requests: Request[];
	readonly isLoading: boolean;
}

export const useRequests = (): UseRequestsResult => {
	const requests = useTypedSelector((state) => state.requests.requests);
	const isLoading = useTypedSelector((state) => state.requests.isLoading);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		if (!requests.length) {
			dispatch(loadRequestsThunk());
			dispatch(subscribeChangeRequestStatusThunk());
			dispatch(subscribeNewRequestThunk());
		}
	}, [requests.length, dispatch]);

	return { requests, isLoading };
};
