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
						MODE: 2,
					},
				},
			},
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			vue: '@vue/compat',

			process: 'process/browser',
			zlib: 'browserify-zlib',
			util: 'util',
		},
	},
});
