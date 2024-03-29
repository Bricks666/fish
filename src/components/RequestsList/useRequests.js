import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	loadRequestsThunk,
	subscribeChangeRequestStatusThunk,
	subscribeNewRequestThunk,
} from "../../models/requests";

export const useRequests = () => {
	const requests = useSelector((state) => state.requests.requests);
	const isLoading = useSelector((state) => state.requests.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!requests.length) {
			dispatch(loadRequestsThunk());
			dispatch(subscribeChangeRequestStatusThunk());
			dispatch(subscribeNewRequestThunk());
		}
	}, [requests.length, dispatch]);

	return { requests, isLoading };
};
