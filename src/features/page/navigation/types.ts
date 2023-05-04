export interface BaseNavigationItem {
	readonly label: string;
	readonly roles?: number[];
	readonly invert?: boolean;
}

export interface SimpleNavigationItem extends BaseNavigationItem {
	readonly path: string;
}

export interface DropdownNavigationItem extends BaseNavigationItem {
	readonly children: Array<SimpleNavigationItem>;
}

export type NavigationItemParams = SimpleNavigationItem | DropdownNavigationItem;
