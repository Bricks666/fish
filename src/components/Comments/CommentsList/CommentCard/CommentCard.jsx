import { Card } from "react-bootstrap";

export const CommentCard = ({ id, body }) => {
	return (
		<Card>
			<Card.Header>
				<Card.Title>Комментарий №{id}</Card.Title>
			</Card.Header>
			<Card.Body>
				<Card.Text>{body}</Card.Text>
			</Card.Body>
		</Card>
	);
};
