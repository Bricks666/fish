import * as React from 'react';
import { Nav } from 'react-bootstrap';
import { NavigationItem, NavigationItemDesc } from '../NavigationItem';

export interface NavigationProps {
	readonly navigation: NavigationItemDesc[];
}

export const Navigation: React.FC<NavigationProps> = (props) => {
	const { navigation, } = props;
	return (
		<Nav>
			{navigation.map((nav) => (
				<NavigationItem {...nav} key={nav.label} />
			))}
		</Nav>
	);
};
