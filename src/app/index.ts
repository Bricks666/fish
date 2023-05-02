import { createApp } from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import App from './app.vue';
import { store } from './providers';
import { router } from './providers/router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export const app = createApp(App).use(router).use(store).use(BootstrapVue);
