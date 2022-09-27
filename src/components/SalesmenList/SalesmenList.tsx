import { Button, Container, ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserInfo } from '../UserInfo';
import { useSalesmen } from '../../hooks';
import { SEARCH_PARAMS } from '../../consts';

export const SalesmenList = ({ shopAddress, }) => {
	const { isLoading, salesmen, } = useSalesmen(shopAddress);

	return (
		<Container>
			<h3>Продавцы</h3>
			{isLoading ? (
				<Spinner variant='border' />
			) : (
				<ListGroup>
					{salesmen.map((salesman) => (
						<ListGroup.Item key={salesman.address}>
							<UserInfo {...salesman}>
								<Button
									as={Link}
									to={`/salesmen?${SEARCH_PARAMS.SHOP_ADDRESS}=${shopAddress}&${SEARCH_PARAMS.SUBJECT_ADDRESS}=${salesman.address}`}
								>
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
