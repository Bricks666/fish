export const ROLES = {
    GUEST: -1,
    USER: 0,
    SHOPER: 1,
    ADMIN: 2,
    SHOP: 3,
    BANK: 4,
    PROVIDER: 5
}

export const ROLES_NAME = {
    [ROLES.GUEST] : "Гость",
    [ROLES.USER] : "Пользователь",
    [ROLES.SHOPER] : "Продавец",
    [ROLES.ADMIN] : "Администратор",
    [ROLES.SHOP] : "Магазин",
    [ROLES.BANK] : "Банк",
    [ROLES.PROVIDER] : "Поставщик",
}

export const STATUSES  = {
    WAITING: 0,
    CANCELED: 1, 
    ACCEPTED: 2
}

export const STATUSES_NAME = {
    [STATUSES.WAITING]: "Ожидание",
    [STATUSES.ACCEPTED]: "Принят",
    [STATUSES.CANCELED]: "Отклонен",
}

export const REQUEST_TYPE = {
    TO_ADMIN: 0,
    TO_USER:1, 
    TO_SHOPER: 2
}

export const REQUEST_TYPE_NAME = {
    [REQUEST_TYPE.TO_ADMIN]: "Повышение до администратора",
    [REQUEST_TYPE.TO_USER]: "Понижение до пользователя",
    [REQUEST_TYPE.TO_SHOPER]: "Повышение до продавца",
}