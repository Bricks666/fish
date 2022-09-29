import { useEffect } from 'react';
import {
	loadReviewsThunk,
	resetReviewsAC,
	Review,
	subscribeChangeReviewThunk,
	subscribeNewReviewThunk,
} from '@/models/reviews';
import { Address } from '@/interfaces/web3';
import { useTypedSelector } from './useTypedSelector';
import { useTypedDispatch } from './useTypedDispatch';

export interface UseReviewsResult {
	readonly isLoading: boolean;
	readonly reviews: Review[];
}

export const useReviews = (subjectAddress: Address): UseReviewsResult => {
	const reviews = useTypedSelector((state) => state.reviews.list);
	const isLoading = useTypedSelector((state) => state.reviews.isLoading);
	const dispatch = useTypedDispatch();

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
