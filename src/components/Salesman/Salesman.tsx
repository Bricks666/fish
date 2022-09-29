import * as React from 'react';
import { useSalesman } from './useSalesman';
import { UserInfo } from '../UserInfo';
import { SEARCH_PARAMS } from '@/consts/route';
import { useSearchParam } from '@/hooks/useSearchParam';
import { Address } from '@/interfaces/web3';

export interface SalesmanProps {
	readonly address: Address;
}

export const Salesman: React.FC<SalesmanProps> = (props) => {
	const { address } = props;
	const shopAddress = useSearchParam(SEARCH_PARAMS.shopAddress)!;
	const salesman = useSalesman(shopAddress, address);

	if (!salesman) {
		return null;
	}

	return <UserInfo {...salesman} />;
};
