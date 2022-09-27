import { useReview } from './useReview';
import { ReviewCard } from '../ReviewCard';
import { useUser } from '@/hooks';
import { ROLES } from '../../consts';

export const Review = ({ id, subjectAddress }) => {
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
		/>
	);
};
