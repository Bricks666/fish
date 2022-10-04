import * as React from 'react';
import { Button, Container, ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserInfo } from '../UserInfo';
import { useSalesmen } from '@/hooks/useSalesmen';
import { SEARCH_PARAMS } from '@/consts/route';
import { Address } from '@/packages/web3';

export interface SalesmenListProps {
	readonly shopAddress: Address;
}

export const SalesmenList: React.FC<SalesmenListProps> = (props) => {
	const { shopAddress } = props;
	const { isLoading, salesmen } = useSalesmen(shopAddress);

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
									to={`/salesmen?${SEARCH_PARAMS.shopAddress}=${shopAddress}&${SEARCH_PARAMS.subjectAddress}=${salesman.address}`}>
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
