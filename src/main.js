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

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';

// Swiper CSS (basis + modules die ik vaak gebruik)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const app = createApp(App);

// glightbox
const lightbox = Glightbox({
  touchNavigation: true,
  loop: true,
});
app.config.globalProperties.$glightbox = lightbox;

// Swiper globaal registreren
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

app.use(createPinia());
app.use(router);

app.mount('#app');
