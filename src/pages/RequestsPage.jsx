import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import { MyRequestsList } from "../components/MyRequestsList";
import { RequestsList } from "../components/RequestsList";
import { resetRequestsAC } from "../models/requests";

export const RequestsPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		return () => {
			dispatch(resetRequestsAC());
		};
	}, [dispatch]);
	return (
		<Container>
			<h2>Запросы</h2>
			<Routes>
				<Route path="my" element={<MyRequestsList />} />
				<Route path="all" element={<RequestsList />} />
				<Route path="*" element={<Navigate to="my" replace={true} />} />
			</Routes>
		</Container>
	);
};
