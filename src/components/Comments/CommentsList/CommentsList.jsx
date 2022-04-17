import { Container, ListGroup, Spinner } from "react-bootstrap";
import { useComments } from "../../../hooks";
import { CommentCard } from "./CommentCard";

export const CommentsList = ({ subjectAddress, reviewId }) => {
	const { comments, isLoading } = useComments(subjectAddress, reviewId);

	return (
		<Container>
			{isLoading ? (
				<Spinner variant="border" />
			) : (
				<ListGroup>
					{comments.map((comment) => (
						<ListGroup.Item key={comment.id}>
							<CommentCard {...comment} />
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</Container>
	);
};
