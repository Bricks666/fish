import * as React from 'react';
import { Container, ListGroup, Spinner } from 'react-bootstrap';
import { RequestCard } from '../RequestCard';
import { useGetUserRequestsQuery } from '@/models/requests';
import { useLoginMutation } from '@/models/auth';

export const MyRequestsList: React.FC = () => {
	const [, { data: address = '', }] = useLoginMutation({
		fixedCacheKey: 'login',
	});
	const { data: requests = [], isLoading, } = useGetUserRequestsQuery(address);
	return (
		<Container>
			{isLoading ? (
				<Spinner animation='border' />
			) : (
				<ListGroup>
					{requests.map((request) => (
						<ListGroup.Item key={request.id}>
							<RequestCard {...request} />
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</Container>
	);
};
