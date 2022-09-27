import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	loadReviewsThunk,
	resetReviewsAC,
	subscribeChangeReviewThunk,
	subscribeNewReviewThunk
} from '../models/reviews';

export const useReviews = (subjectAddress) => {
	const reviews = useSelector((state) => state.reviews.list);
	const isLoading = useSelector((state) => state.reviews.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadReviewsThunk(subjectAddress));
		dispatch(subscribeChangeReviewThunk(subjectAddress));
		dispatch(subscribeNewReviewThunk(subjectAddress));

		return () => {
			dispatch(resetReviewsAC());
		};
	}, [dispatch, subjectAddress]);

	return {
		reviews,
		isLoading,
	};
};
