import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/pages';
import { BASE } from '@/shared/config';

export const router = createRouter({
	history: createWebHistory(BASE),
	routes,
});
