import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import { routes } from '../routes';
import { AuthRoute } from '../components/AuthRoute';
import { Header } from '../components/Header';
import { initThunk } from '../models/init';

export const App: React.FC = () => {
	const isInit = useSelector((state) => state.init.isInitializing);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(initThunk());
	}, [dispatch]);
	return (
		<Container>
			<Header />
			{isInit ? (
				<Spinner animation='border' />
			) : (
				<Routes>
					{routes.map(({ Component, path, isOnlyAuth }) => {
						return (
							<Route
								path={path}
								element={
									isOnlyAuth ? (
										<AuthRoute>
											<Component />
										</AuthRoute>
									) : (
										<Component />
									)
								}
								key={path}
							/>
						);
					})}
				</Routes>
			)}
		</Container>
	);
};
