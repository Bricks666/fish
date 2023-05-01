import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useDislikeReviewMutation, useLikeReviewMutation } from '@/models/reviews';
import { Address } from '@/packages/web3';
import { useLogin } from '@/hooks/useLogin';

export interface ButtonsProps {
	readonly subjectAddress: Address;
	readonly reviewId: number;
}

export const Buttons: React.FC<ButtonsProps> = React.memo((props) => {
	const { subjectAddress, reviewId, } = props;
	const [, { data: sender = '', }] = useLogin();
	const [likeReview] = useLikeReviewMutation();
	const [dislikeReview] = useDislikeReviewMutation();

	const onLike = React.useCallback(() => {
		likeReview({
			reviewId,
			sender,
			subjectAddress,
		});
	}, [subjectAddress, reviewId, sender, likeReview]);

	const onDislike = React.useCallback(() => {
		dislikeReview({
			reviewId,
			sender,
			subjectAddress,
		});
	}, [subjectAddress, reviewId, sender, dislikeReview]);

	return (
		<>
			<Button onClick={onLike}>Лайк</Button>
			<Button onClick={onDislike}>Дизлайк</Button>
		</>
	);
});
