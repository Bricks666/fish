export type Status = 'WAITING' | 'CANCELED' | 'ACCEPTED';
export type RequestType = 'TO_ADMIN' | 'TO_USER' | 'TO_BUYER';

export const STATUSES: Record<Status, number> = {
	WAITING: 0,
	CANCELED: 1,
	ACCEPTED: 2,
};

export const STATUSES_NAMES: Record<number, string> = {
	[STATUSES.WAITING]: 'Ожидание',
	[STATUSES.ACCEPTED]: 'Принят',
	[STATUSES.CANCELED]: 'Отклонен',
};

export const REQUEST_TYPES: Record<RequestType, number> = {
	TO_ADMIN: 0,
	TO_USER: 1,
	TO_BUYER: 2,
};

export const REQUEST_TYPE_NAMES: Record<number, string> = {
	[REQUEST_TYPES.TO_ADMIN]: 'Повышение до администратора',
	[REQUEST_TYPES.TO_USER]: 'Понижение до пользователя',
	[REQUEST_TYPES.TO_BUYER]: 'Повышение до продавца',
};
