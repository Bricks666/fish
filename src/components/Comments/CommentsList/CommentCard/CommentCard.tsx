import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Comment } from '@/models/comments';

export interface CommentCardProps extends Comment {}

export const CommentCard: React.FC<CommentCardProps> = (props) => {
	const { id, body } = props;
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
