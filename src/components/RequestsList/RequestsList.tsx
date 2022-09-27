import * as React from 'react';
import { Container, ListGroup, Spinner } from 'react-bootstrap';
import { AdminRequestCard } from './AdminRequestCard/AdminRequestCard';
import { useRequests } from './useRequests';

export const RequestsList: React.FC = () => {
	const { requests, isLoading } = useRequests();

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
