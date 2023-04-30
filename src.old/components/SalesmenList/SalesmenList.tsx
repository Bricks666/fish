import * as React from 'react';
import { Button, Container, ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserInfo } from '../UserInfo';
import { SEARCH_PARAMS } from '@/consts/route';
import { useGetSalesmenQuery } from '@/models/users';

export interface SalesmenListProps {
	readonly shopId: number;
}

export const SalesmenList: React.FC<SalesmenListProps> = (props) => {
	const { shopId } = props;
	const { isLoading, data: salesmen = [] } = useGetSalesmenQuery({ shopId });

	return (
		<Container>
			<h3>Продавцы</h3>
			{isLoading ? (
				<Spinner animation='border' />
			) : (
				<ListGroup>
					{salesmen.map((salesman) => (
						<ListGroup.Item key={salesman.address}>
							<UserInfo {...salesman}>
								<Button
									as={Link as any}
									to={`/salesmen?${SEARCH_PARAMS.shopId}=${shopId}&${SEARCH_PARAMS.subjectId}=${salesman.address}`}>
									Подробнее
								</Button>
							</UserInfo>
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</Container>
	);
};
