import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MyRequestsList } from '@/components/MyRequestsList';
import { RequestsList } from '@/components/RequestsList';
import { resetRequestsAC } from '@/models/requests';
import { MainLayout } from '@/layouts/MainLayout';

const RequestsPage: React.FC = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		return () => {
			dispatch(resetRequestsAC());
		};
	}, [dispatch]);

	return (
		<MainLayout>
			<h2>Запросы</h2>
			<Routes>
				<Route path='my' element={<MyRequestsList />} />
				<Route path='all' element={<RequestsList />} />
				<Route path='*' element={<Navigate to='my' replace />} />
			</Routes>
		</MainLayout>
	);
};

export default RequestsPage;
