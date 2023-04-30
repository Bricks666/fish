import * as React from 'react';
import { UserInfo } from '../UserInfo';
import { SEARCH_PARAMS } from '@/consts/route';
import { useSearchParam } from '@/hooks/useSearchParam';
import { useGetSalesmanQuery } from '@/models/users';

export interface SalesmanProps {
	readonly salesmanId: number;
}

export const Salesman: React.FC<SalesmanProps> = (props) => {
	const { salesmanId } = props;
	const shopId = Number(useSearchParam(SEARCH_PARAMS.shopId));
	const { data: salesman } = useGetSalesmanQuery({
		shopId,
		salesmanId,
	});

	if (!salesman) {
		return null;
	}

	return <UserInfo {...salesman} />;
};
