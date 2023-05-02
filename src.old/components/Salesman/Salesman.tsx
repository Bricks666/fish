import * as React from 'react';
import { UserInfo } from '../UserInfo';
import { SEARCH_PARAMS } from '@old/consts/route';
import { useSearchParam } from '@old/hooks/useSearchParam';
import { useGetSalesmanQuery } from '@old/models/users';

export interface SalesmanProps {
	readonly salesmanId: number;
}

export const Salesman: React.FC<SalesmanProps> = (props) => {
	const { salesmanId, } = props;
	const shopId = Number(useSearchParam(SEARCH_PARAMS.shopId));
	const { data: salesman, } = useGetSalesmanQuery({
		shopId,
		salesmanId,
	});

	if (!salesman) {
		return null;
	}

	return <UserInfo {...salesman} />;
};
