import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from '@/components/Header';

export interface MainLayoutProps {}

export const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = (props) => {
	const { children } = props;
	return (
		<Container>
			<Header />
			{children}
		</Container>
	);
};
