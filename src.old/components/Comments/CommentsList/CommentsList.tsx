import * as React from 'react';
import { Container, ListGroup, Spinner } from 'react-bootstrap';
import { Address } from '@/packages/web3';
import { CommentCard } from './CommentCard';
import { useGetCommentsQuery } from '@/models/comments';

export interface CommentsListProps {
	readonly subjectAddress: Address;
	readonly reviewId: number;
}

export const CommentsList: React.FC<CommentsListProps> = (props) => {
	const { subjectAddress, reviewId, } = props;
	const { data: comments = [], isLoading, } = useGetCommentsQuery({ subjectAddress, reviewId, });

	return (
		<Container>
			{isLoading ? (
				<Spinner animation='border' />
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
