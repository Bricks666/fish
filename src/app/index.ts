import { BootstrapVue } from 'bootstrap-vue';
import { createApp } from 'vue';
import App from './app.vue';
import { store } from './providers';
import { router } from './providers/router';

export const app = createApp(App).use(router).use(store).use(BootstrapVue);
