import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	loadCommentsThunk,
	resetCommentsAC,
	subscribeNewCommentThunk
} from '../models/comments';

export const useComments = (subjectAddress, reviewId) => {
	const comments = useSelector((state) => state.comments.list);
	const isLoading = useSelector((state) => state.comments.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadCommentsThunk(subjectAddress, reviewId));
		dispatch(subscribeNewCommentThunk(subjectAddress, reviewId));

		return () => {
			dispatch(resetCommentsAC());
		};
	}, [dispatch, subjectAddress, reviewId]);

	return {
		comments,
		isLoading,
	};
};
