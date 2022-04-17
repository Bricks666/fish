import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Salesman } from "../components/Salesman";
import { Reviews } from "../components/Reviews";

export const SalesmanPage = () => {
	const { address } = useParams();
	return (
		<Container>
			<h2>Продавец</h2>
			<Salesman address={address} />
			<Reviews subjectAddress={address} />
		</Container>
	);
};
