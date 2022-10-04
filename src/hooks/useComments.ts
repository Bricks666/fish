import { useEffect } from 'react';
import { Address } from '@/packages/web3';
import {
	Comment,
	loadCommentsThunk,
	resetCommentsAC,
	subscribeNewCommentThunk,
} from '@/models/comments';
import { useTypedDispatch } from './useTypedDispatch';
import { useTypedSelector } from './useTypedSelector';

export interface UseCommentsResult {
	readonly isLoading: boolean;
	readonly comments: Comment[];
}

export const useComments = (subjectAddress: Address, reviewId: number) => {
	const comments = useTypedSelector((state) => state.comments.list);
	const isLoading = useTypedSelector((state) => state.comments.isLoading);
	const dispatch = useTypedDispatch();

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
