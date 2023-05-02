import * as React from 'react';
import { Reviews } from '@old/components/Reviews';
import { Salesman } from '@old/components/Salesman';
import { SEARCH_PARAMS } from '@old/consts';
import { useSearchParam } from '@old/hooks/useSearchParam';
import { MainLayout } from '@old/layouts/MainLayout';

const SalesmanPage: React.FC = () => {
	const salesmanId = useSearchParam(SEARCH_PARAMS.subjectId);

	if (!salesmanId) {
		return null;
	}

	return (
		<MainLayout>
			<h2>Продавец</h2>
			<Salesman salesmanId={address} />
			<Reviews subjectAddress={address} />
		</MainLayout>
	);
};

export default SalesmanPage;
