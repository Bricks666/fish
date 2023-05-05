import type { NavigationItemParams, DropdownNavigationItem, SimpleNavigationItem } from './types';

export const isDropdownNavigation = (item: any): item is DropdownNavigationItem => {
	return 'children' in item;
};

export const isSimpleNavigation = (item: any): item is SimpleNavigationItem => {
	return 'path' in item;
};

export const filterItemsByRole = (
	items: NavigationItemParams[],
	role: number
): NavigationItemParams[] => {
	return items.filter((item) => {
		let isAllow = true;

		if (item.roles) {
			if (item.invert) {
				isAllow = !item.roles.includes(role);
			} else {
				isAllow = item.roles.includes(role);
			}
		}

		if (isAllow && isDropdownNavigation(item)) {
			// Чтобы отфильтровать вложенные пути
			const copy = { ...item, };
			copy.children = filterItemsByRole(copy.children, role) as SimpleNavigationItem[];
		}

		return isAllow;
	});
};
