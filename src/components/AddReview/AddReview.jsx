import { Container } from "react-bootstrap";
import { AddReviewForm } from "./AddReviewForm";

export const AddReview = ({ subjectAddress }) => {
	return (
		<Container>
			<h3>Добавить отзыв</h3>
			<AddReviewForm subjectAddress={subjectAddress} />
		</Container>
	);
};
