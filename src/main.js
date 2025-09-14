import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import '@flaticon/flaticon-uicons/css/all/all.css';
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Glightbox
import Glightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const app = createApp(App);

// glightbox
const lightbox = Glightbox({
  touchNavigation: true,
  loop: true,
});
app.config.globalProperties.$glightbox = lightbox;

app.use(createPinia());
app.use(router);

app.mount('#app');
