import * as React from 'react';
import { Container, ListGroup, Spinner } from 'react-bootstrap';
import { AdminRequestCard } from '../AdminRequestCard';
import { useGetAllRequestsQuery } from '@/models/requests';

export const RequestsList: React.FC = () => {
	const { data: requests = [], isLoading } = useGetAllRequestsQuery(undefined);

	return (
		<Container>
			{isLoading ? (
				<Spinner animation='border' />
			) : (
				<ListGroup>
					{requests.map((request) => (
						<ListGroup.Item key={request.id}>
							<AdminRequestCard {...request} />
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</Container>
	);
};
