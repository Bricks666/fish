import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	loadSalesmenThunk,
	resetSalesmenAC,
	subscribeNewSalesmanThunk,
} from "../models/slesmen";

export const useSalesmen = (shopId) => {
	const salesmen = useSelector((state) => state.salesmen.salesmen);
	const isLoading = useSelector((state) => state.salesmen.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!salesmen.length) {
			dispatch(loadSalesmenThunk(shopId));
			dispatch(subscribeNewSalesmanThunk(shopId));
		}
	}, [dispatch, salesmen.length, shopId]);

	useEffect(() => {
		return () => {
			dispatch(resetSalesmenAC());
		};
	}, [dispatch]);

	return {
		salesmen,
		isLoading,
	};
};
