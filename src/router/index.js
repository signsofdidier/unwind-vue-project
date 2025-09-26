import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RoomsView from '@/views/RoomsView.vue';
import RestoBarView from '@/views/RestoBarView.vue';
import BlogView from '@/views/BlogView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomsView,
    },
    {
      path: '/resto-bar',
      name: 'resto-bar',
      component: RestoBarView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
});

export default router;

// ZORGEN DAT DE NAVBAR COLLAPSED BIJ KLIKKEN

// In je router configuratie (bijvoorbeeld router/index.js)
router.beforeEach((to, from, next) => {
  // Sluit navbar collapse bij elke route change
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');

    const toggler = document.querySelector('.navbar-toggler');
    if (toggler) {
      toggler.classList.add('collapsed');
      toggler.setAttribute('aria-expanded', 'false');
    }
  }

  next(); // Vergeet deze niet!
});
