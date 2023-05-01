import * as React from 'react';
import { useUser } from '@/hooks/useUser';

export interface RoleFilterProps {
	readonly roles: number[];
	readonly invert?: boolean;
}

export const RoleFilter: React.FC<React.PropsWithChildren<RoleFilterProps>> = (props) => {
	const { children, roles, invert, } = props;
	const { info, } = useUser();

	if ((invert && roles.includes(info.role)) || (!invert && !roles.includes(info.role))) {
		return null;
	}

	return children as React.ReactElement;
};
