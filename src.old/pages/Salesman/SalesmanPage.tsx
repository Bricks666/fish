import * as React from 'react';
import { Reviews } from '@/components/Reviews';
import { Salesman } from '@/components/Salesman';
import { SEARCH_PARAMS } from '@/consts';
import { useSearchParam } from '@/hooks/useSearchParam';
import { MainLayout } from '@/layouts/MainLayout';

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
