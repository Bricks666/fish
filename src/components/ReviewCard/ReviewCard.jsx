import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SEARCH_PARAMS } from '../../consts';
import { Buttons } from './Buttons';

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
	const address = useSelector((state) => state.auth.address);
	const mayMark = !(isMarked || isGuest) && !!address;
	return (
		<Card>
			<Card.Header>
				<Card.Title>
					Отзыв №
					{id}
				</Card.Title>
				<Card.Text>
					На пользователя:
					{subjectAddress}
				</Card.Text>
			</Card.Header>
			<Card.Body>
				<Row>
					<Col>
						<Card.Text>{body}</Card.Text>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card.Text>
							Оценка:
							{mark}
							/10
						</Card.Text>
					</Col>
					<Col>
						<Card.Text>
							Лайки:
							{likes.length}
						</Card.Text>
					</Col>
					<Col>
						<Card.Text>
							Дизлайки:
							{dislikes.length}
						</Card.Text>
					</Col>
				</Row>
			</Card.Body>
			<Card.Footer>
				<Card.Link
					as={Link}
					to={`/reviews?${SEARCH_PARAMS.SUBJECT_ADDRESS}=${subjectAddress}&${SEARCH_PARAMS.REVIEW_ID}=${id}`}
				>
					Подробнее
				</Card.Link>
				{mayMark && <Buttons subjectAddress={subjectAddress} reviewId={id} />}
			</Card.Footer>
		</Card>
	);
};
