<template>
  <NavbarComponent />

  <RouterView />

  <FooterComponent />
  <ScrollToTop />
</template>

<script setup>
import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import ScrollToTop from './components/ScrollToTop.vue';
</script>

<style scoped></style>
