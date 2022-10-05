import * as React from 'react';
import { Reviews } from '@/components/Reviews';
import { Salesman } from '@/components/Salesman';
import { SEARCH_PARAMS } from '@/consts';
import { useSearchParam } from '@/hooks/useSearchParam';
import { MainLayout } from '@/layouts/MainLayout';

const SalesmanPage: React.FC = () => {
	const address = useSearchParam(SEARCH_PARAMS.subjectAddress);

	if (!address) {
		return null;
	}

	return (
		<MainLayout>
			<h2>Продавец</h2>
			<Salesman address={address} />
			<Reviews subjectAddress={address} />
		</MainLayout>
	);
};

export default SalesmanPage;
