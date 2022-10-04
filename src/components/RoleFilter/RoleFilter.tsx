import * as React from 'react';
import { useUser } from '@/hooks/useUser';

export interface RoleFilterProps {
	readonly roles: number[];
	readonly invert?: boolean;
}

export const RoleFilter: React.FC<React.PropsWithChildren<RoleFilterProps>> = (props) => {
	const { children, roles, invert } = props;
	const {
		info: { role },
	} = useUser();

	if ((invert && roles.includes(role)) || (!invert && !roles.includes(role))) {
		return null;
	}

	return children as React.ReactElement;
};
