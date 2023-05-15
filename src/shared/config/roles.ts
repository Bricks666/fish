export type Role = 'GUEST' | 'USER' | 'SALESMAN' | 'ADMIN' | 'SHOP' | 'BANK' | 'PROVIDER';

export const ROLES: Record<Role, number> = {
	GUEST: -1,
	USER: 0,
	SALESMAN: 1,
	ADMIN: 2,
	SHOP: 3,
	BANK: 4,
	PROVIDER: 5,
};

export const ROLES_NAMES: Record<number, string> = {
	[ROLES.GUEST]: 'Гость',
	[ROLES.USER]: 'Пользователь',
	[ROLES.SALESMAN]: 'Продавец',
	[ROLES.ADMIN]: 'Администратор',
	[ROLES.SHOP]: 'Магазин',
	[ROLES.BANK]: 'Банк',
	[ROLES.PROVIDER]: 'Поставщик',
};
