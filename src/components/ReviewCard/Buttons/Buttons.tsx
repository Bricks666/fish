import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { dislikeReviewThunk, likeReviewThunk } from '@/models/reviews';
import { Address } from '@/interfaces/web3';

export interface ButtonsProps {
	readonly subjectAddress: Address;
	readonly reviewId: number;
}

export const Buttons: React.FC<ButtonsProps> = React.memo((props) => {
	const { subjectAddress, reviewId } = props;
	const dispatch = useTypedDispatch();

	const onLike = React.useCallback(() => {
		dispatch(likeReviewThunk(subjectAddress, reviewId));
	}, [subjectAddress, reviewId, dispatch]);

	const onDislike = React.useCallback(() => {
		dispatch(dislikeReviewThunk(subjectAddress, reviewId));
	}, [subjectAddress, reviewId, dispatch]);

	return (
		<>
			<Button onClick={onLike}>Лайк</Button>
			<Button onClick={onDislike}>Дизлайк</Button>
		</>
	);
});
