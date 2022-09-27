import { useSalesmen } from '@/hooks';

export const useSalesman = (shopAddress, salesmanAddress) => {
	const { salesmen, } = useSalesmen(shopAddress);

	return salesmen.find((salesman) => salesman.address === salesmanAddress);
};
