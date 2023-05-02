/* eslint-disable import/no-extraneous-dependencies */
import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					compatConfig: {
						MODE: 3,
					},
				},
			},
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			vue: '@vue/compat',
		},
	},
	define: {
		global: 'window',
	},
});
