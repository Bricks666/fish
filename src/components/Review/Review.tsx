import * as React from 'react';
import { useReview } from './useReview';
import { ReviewCard } from '../ReviewCard';
import { useUser } from '@/hooks/useUser';
import { ROLES } from '@/consts/user';
import { Address } from '@/interfaces/web3';

export interface ReviewProps {
	readonly id: number;
	readonly subjectAddress: Address;
}

export const Review: React.FC<ReviewProps> = (props) => {
	const { id, subjectAddress } = props;
	const review = useReview(subjectAddress, id);
	const {
		info: { role, address },
	} = useUser();

	if (!review) {
		return null;
	}
	const isMarked =
		review.dislikes.includes(address) || review.likes.includes(address);
	return (
		<ReviewCard
			{...review}
			isGuest={role === ROLES.GUEST}
			isMarked={isMarked}
			authAddress={address}
		/>
	);
};
