import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Reviews } from '@/components/Reviews';
import { Salesman } from '@/components/Salesman';
import { SEARCH_PARAMS } from '@/consts';
import { useSearchParam } from '@/hooks/useSearchParam';

const SalesmanPage: React.FC = () => {
	const address = useSearchParam(SEARCH_PARAMS.subjectAddress);

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
