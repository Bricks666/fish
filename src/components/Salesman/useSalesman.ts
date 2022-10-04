import { useSalesmen } from '@/hooks/useSalesmen';
import { Address } from '@/packages/web3';

export const useSalesman = (shopAddress: Address, salesmanAddress: Address) => {
	const { salesmen } = useSalesmen(shopAddress);

	return salesmen.find((salesman) => salesman.address === salesmanAddress);
};
