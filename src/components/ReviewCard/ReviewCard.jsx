import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Buttons } from "./Buttons";

export const ReviewCard = ({
	id,
	body,
	subjectAddress,
	mark,
	likes,
	dislikes,
	isMarked,
	isGuest,
}) => {
	const mayMark = !(isMarked || isGuest);
	return (
		<Card>
			<Card.Header>
				<Card.Title>Отзыв №{id}</Card.Title>
				<Card.Text>На пользователя: {subjectAddress}</Card.Text>
			</Card.Header>
			<Card.Body>
				<Row>
					<Col>
						<Card.Text>{body}</Card.Text>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card.Text>Оценка: {mark}/10</Card.Text>
					</Col>
					<Col>
						<Card.Text>Лайки: {likes.length}</Card.Text>
					</Col>
					<Col>
						<Card.Text>Дизлайки: {dislikes.length}</Card.Text>
					</Col>
				</Row>
			</Card.Body>
			<Card.Footer>
				<Card.Link as={Link} to={`/reviews/${id}`}>
					Подробнее
				</Card.Link>
				{mayMark && <Buttons subjectAddress={subjectAddress} reviewId={id} />}
			</Card.Footer>
		</Card>
	);
};
