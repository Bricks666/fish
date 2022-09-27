import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './AppRoutes.module.css';

export interface AppRoutesProps extends CommonProps {}

export const AppRoutes: React.FC<AppRoutesProps> = React.memo(
	function AppRoutes(props) {
		const { className } = props;
		return null;
	}
);
