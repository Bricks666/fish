import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Reviews } from '@/components/Reviews';
import { Salesman } from '@/components/Salesman';
import { SEARCH_PARAMS } from '@/consts';
import { useSearchParam } from '@/hooks';

const SalesmanPage: React.FC = () => {
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

export default SalesmanPage;
