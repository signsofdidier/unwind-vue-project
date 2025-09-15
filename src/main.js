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

// Tiny Slider
import { tns } from 'tiny-slider/src/tiny-slider';
// Import Tiny Slider CSS
import 'tiny-slider/dist/tiny-slider.css';

const app = createApp(App);

// glightbox
const lightbox = Glightbox({
  touchNavigation: true,
  loop: true,
});
app.config.globalProperties.$glightbox = lightbox;

// Tiny slider
// Maak tns globaal beschikbaar
app.config.globalProperties.$tns = tns;

app.use(createPinia());
app.use(router);

app.mount('#app');
