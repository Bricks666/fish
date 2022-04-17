import { Button, Container, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserInfo } from "../UserInfo";
import { useSalesmen } from "../../hooks/";

export const SalesmenList = ({ shopId, salesmenAddress }) => {
	const { isLoading, salesmen } = useSalesmen(shopId, salesmenAddress);

	return (
		<Container>
			<h3>Продавцы</h3>
			{isLoading ? (
				<Spinner />
			) : (
				<ListGroup>
					{salesmen.map((salesman) => (
						<ListGroup.Item key={salesman.address}>
							<UserInfo {...salesman}>
								<Button
									as={Link}
									to={`/salesmen/${salesman.address}?shop-id=${shopId}`}
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
