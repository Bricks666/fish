import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import { routes } from '@/routes';
import { AuthRoute } from '../AuthRoute';

export interface AppRoutesProps {}

export const AppRoutes: React.FC<AppRoutesProps> = React.memo(function AppRoutes() {
	return (
		<React.Suspense
			fallback={
				<Container>
					<Spinner animation='border' />
				</Container>
			}>
			<Routes>
				{routes.map(({ Component, path, isOnlyAuth, }) => {
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
		</React.Suspense>
	);
});
