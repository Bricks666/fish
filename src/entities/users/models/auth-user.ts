import { defineStore } from 'pinia';
import { computed, type ComputedRef } from 'vue';
import { ROLES } from '@/shared/config';
import { createHandlessDataFetch, type HandlessDataFetch } from '@/shared/lib';
import type { User } from '../types';
import { getDefaultUser } from './lib';

export const KEY = 'AUTH_USER_STORE';

export interface AuthUserStore extends HandlessDataFetch<User, User> {
	readonly isAuth: ComputedRef<boolean>;
}

export const useStore = defineStore(KEY, (): AuthUserStore => {
	const { error, loaded, loading, result } = createHandlessDataFetch<User, User>({
		defaultValue: getDefaultUser(),
	});

	const isAuth = computed(() => result.value.role !== ROLES.GUEST);

	return { result, error, loaded, loading, isAuth };
});
