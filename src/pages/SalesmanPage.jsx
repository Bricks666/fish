import { Container } from "react-bootstrap";
import { Salesman } from "../components/Salesman";
import { Reviews } from "../components/Reviews";
import { useSearchParam } from "../hooks";
import { SEARCH_PARAMS } from "../consts";

export const SalesmanPage = () => {
	const address = useSearchParam(SEARCH_PARAMS.SUBJECT_ADDRESS);

	if (!address) {
		return null;
	}

	return (
		<Container>
			<h2>Продавец</h2>
			<Salesman address={address} />
			<Reviews subjectAddress={address} />
		</Container>
	);
};
