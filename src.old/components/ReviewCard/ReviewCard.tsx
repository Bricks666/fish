import * as React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEARCH_PARAMS } from '@old/consts/route';
import { Buttons } from './Buttons';
import { Review } from '@old/models/reviews';
import { Address } from '@old/packages/web3';

export interface ReviewCardProps extends Review {
	readonly authAddress: Address;
	readonly isMarked: boolean;
	readonly isGuest: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = (props) => {
	const { id, body, subjectAddress, mark, likes, dislikes, authAddress, isMarked, isGuest, } = props;
	const mayMark = !(isMarked || isGuest) && !!authAddress;
	return (
		<Card>
			<Card.Header>
				<Card.Title>Отзыв №{id}</Card.Title>
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
					as={Link as any}
					to={`/reviews?${SEARCH_PARAMS.subjectId}=${subjectAddress}&${SEARCH_PARAMS.reviewId}=${id}`}>
					Подробнее
				</Card.Link>
				{mayMark && <Buttons subjectAddress={subjectAddress} reviewId={id} />}
			</Card.Footer>
		</Card>
	);
};
