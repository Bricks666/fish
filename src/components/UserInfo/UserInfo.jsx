import { Container, ListGroup } from "react-bootstrap";
import { ROLES_NAME } from "../../consts";

export const UserInfo = ({
	login,
	address,
	name,
	role,
	shopAddress,
	children,
}) => {
	return (
		<Container>
			<ListGroup as="dl">
				<ListGroup.Item as="dt">Логин</ListGroup.Item>
				<ListGroup.Item as="dd">{login}</ListGroup.Item>
				<ListGroup.Item as="dt">Адрес кошелька</ListGroup.Item>
				<ListGroup.Item as="dd">{address}</ListGroup.Item>
				<ListGroup.Item as="dt">Имя</ListGroup.Item>
				<ListGroup.Item as="dd">{name}</ListGroup.Item>
				<ListGroup.Item as="dt">Роль</ListGroup.Item>
				<ListGroup.Item as="dd">{ROLES_NAME[role]}</ListGroup.Item>
				{shopAddress && (
					<>
						<ListGroup.Item as="dt">Магазин:</ListGroup.Item>
						<ListGroup.Item as="dd">{shopAddress}</ListGroup.Item>
					</>
				)}
				{children}
			</ListGroup>
		</Container>
	);
};
