import { useSearchParams } from "react-router-dom";
import { useSalesman } from "./useSalesman";
import { UserInfo } from "../UserInfo";

export const Salesman = ({ address }) => {
	const [searchParams] = useSearchParams();
	const shopId = +searchParams.get("shop-id");
	const salesman = useSalesman(shopId, address);

	if (!salesman) {
		return null;
	}

	return <UserInfo {...salesman} />;
};
