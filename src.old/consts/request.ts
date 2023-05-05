export type Status = 'WAITING' | 'CANCELED' | 'ACCEPTED';
export type RequestType = 'TO_ADMIN' | 'TO_USER' | 'TO_SHOPER';

export const STATUSES: Record<Status, number> = {
	WAITING: 0,
	CANCELED: 1,
	ACCEPTED: 2,
};

export const STATUSES_NAME: Record<number, string> = {
	[STATUSES.WAITING]: 'Ожидание',
	[STATUSES.ACCEPTED]: 'Принят',
	[STATUSES.CANCELED]: 'Отклонен',
};

export const REQUEST_TYPE: Record<RequestType, number> = {
	TO_ADMIN: 0,
	TO_USER: 1,
	TO_SHOPER: 2,
};

export const REQUEST_TYPE_NAME: Record<number, string> = {
	[REQUEST_TYPE.TO_ADMIN]: 'Повышение до администратора',
	[REQUEST_TYPE.TO_USER]: 'Понижение до пользователя',
	[REQUEST_TYPE.TO_SHOPER]: 'Повышение до продавца',
};