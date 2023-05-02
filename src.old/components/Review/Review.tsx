import * as React from 'react';
import { ReviewCard } from '../ReviewCard';
import { ROLES } from '@old/consts/user';
import { Address } from '@old/packages/web3';
import { useUser } from '@old/hooks/useUser';
import { useGetReviewQuery } from '@old/models/reviews';

export interface ReviewProps {
	readonly id: number;
	readonly subjectAddress: Address;
}

export const Review: React.FC<ReviewProps> = (props) => {
	const { id, subjectAddress, } = props;
	const { data: review, } = useGetReviewQuery({ subjectAddress, reviewId: id, });
	const { info, } = useUser();

	if (!review || !info) {
		return null;
	}

	const { role, address, } = info;
	const isMarked = review.dislikes.includes(address) || review.likes.includes(address);
	return (
		<ReviewCard
			{...review}
			isGuest={role === ROLES.GUEST}
			isMarked={isMarked}
			authAddress={address}
		/>
	);
};
