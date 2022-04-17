import { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { dislikeReviewThunk, likeReviewThunk } from "../../../models/reviews";

export const Buttons = ({ subjectAddress, reviewId }) => {
	const dispatch = useDispatch();

	const onLike = useCallback(() => {
		dispatch(likeReviewThunk(subjectAddress, reviewId));
	}, [subjectAddress, reviewId, dispatch]);

	const onDislike = useCallback(() => {
		dispatch(dislikeReviewThunk(subjectAddress, reviewId));
	}, [subjectAddress, reviewId, dispatch]);

	return (
		<>
			<Button onClick={onLike}>Лайк</Button>
			<Button onClick={onDislike}>Дизлайк</Button>
		</>
	);
};
