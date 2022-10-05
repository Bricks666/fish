/* eslint-disable no-shadow */
import * as React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RoleFilter } from '../RoleFilter';
import { NavigationItemDesc } from './types';

export interface NavigationItemProps extends NavigationItemDesc {}

export const NavigationItem: React.FC<NavigationItemProps> = React.memo(function NavigationItem(
	props
) {
	const { label, path, roles, invert } = props;
	const item = (
		<Nav.Item>
			{typeof path === 'string' ? (
				<Nav.Link as={Link as any} to={path}>
					{label}
				</Nav.Link>
			) : (
				<NavDropdown title={label}>
					{path.map(({ label, path, roles, invert }) => {
						const item = (
							<NavDropdown.Item as={Link as any} to={path} key={path}>
								{label}
							</NavDropdown.Item>
						);

						return roles ? (
							<RoleFilter roles={roles} invert={invert} key={path}>
								{item}
							</RoleFilter>
						) : (
							item
						);
					})}
				</NavDropdown>
			)}
		</Nav.Item>
	);
	console.log(props);

	return roles ? (
		<RoleFilter roles={roles} invert={invert}>
			{item}
		</RoleFilter>
	) : (
		item
	);
});
