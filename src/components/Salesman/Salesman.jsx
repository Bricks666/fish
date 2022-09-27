import { useSalesman } from './useSalesman';
import { UserInfo } from '../UserInfo';
import { SEARCH_PARAMS } from '../../consts';
import { useSearchParam } from '../../hooks';

export const Salesman = ({ address, }) => {
	const shopAddress = useSearchParam(SEARCH_PARAMS.SHOP_ADDRESS);
	const salesman = useSalesman(shopAddress, address);

	if (!salesman) {
		return null;
	}

	return <UserInfo {...salesman} />;
};
