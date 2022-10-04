import * as React from 'react';
import { useReview } from './useReview';
import { ReviewCard } from '../ReviewCard';
import { ROLES } from '@/consts/user';
import { Address } from '@/packages/web3';
import { useUser } from '@/hooks/useUser';

export interface ReviewProps {
	readonly id: number;
	readonly subjectAddress: Address;
}

export const Review: React.FC<ReviewProps> = (props) => {
	const { id, subjectAddress } = props;
	const review = useReview(subjectAddress, id);
	const { info } = useUser();

	if (!review || !info) {
		return null;
	}

	const { role, address } = info;
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
