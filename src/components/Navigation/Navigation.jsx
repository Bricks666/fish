import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RoleFilter } from '../RoleFilter';

export const Navigation = ({ navigation, }) => {
	return (
		<Nav>
			{navigation.map((nav) => (
				<NavigationItem {...nav} key={nav.label} />
			))}
		</Nav>
	);
};

const NavigationItem = ({ label, path, roles, invert, }) => {
	const item = (
		<Nav.Item>
			{typeof path === 'string' ? (
				<Nav.Link as={Link} to={path}>
					{label}
				</Nav.Link>
			) : (
				<NavDropdown title={label}>
					{path.map(({ label, path, roles, invert, }) => {
						const item = (
							<NavDropdown.Item as={Link} to={path} key={path}>
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

	return roles ? (
		<RoleFilter roles={roles} invert={invert}>
			{item}
		</RoleFilter>
	) : (
		item
	);
};
