import { Container } from "react-bootstrap";
import { useParams, Routes, Route, Navigate } from "react-router";
import { useShop } from "./useShop";
import { ShopCard } from "../ShopCard";
import { SalesmenList } from "../SalesmenList";
import { Reviews } from "../Reviews";
import { Navigation } from "../Navigation";

const navigation = [
	{
		label: "Продавцы",
		path: "salesmen",
	},
	{
		label: "Отзывы",
		path: "reviews",
	},
];

export const Shop = () => {
	const { id } = useParams();
	const shop = useShop(id);

	if (!shop) {
		return null;
	}

	return (
		<Container>
			<ShopCard {...shop} />
			<Navigation navigation={navigation} />
			<Routes>
				<Route
					path="salesmen"
					element={<SalesmenList shopAddress={shop.address} />}
				/>
				<Route
					path="reviews"
					element={<Reviews subjectAddress={shop.address} />}
				/>
				<Route path="*" element={<Navigate to="salesmen" replace={true} />} />
			</Routes>
		</Container>
	);
};
