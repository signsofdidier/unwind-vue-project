<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template> -->

<template>
  <MainHeader />
  <AboutUs />
  <ServicesComponent />
  <SmallCtoComponent />
  <FeaturedRooms />
  <VideoSection />
  <RestaurantSection />
  <TestimonialComponent />
  <CounterComponent />
</template>

<script setup>
import AboutUs from './components/AboutUs.vue';
import CounterComponent from './components/CounterComponent.vue';
import FeaturedRooms from './components/FeaturedRooms.vue';
import MainHeader from './components/MainHeader.vue';
import RestaurantSection from './components/RestaurantSection.vue';
import ServicesComponent from './components/ServicesComponent.vue';
import SmallCtoComponent from './components/SmallCtoComponent.vue';
import TestimonialComponent from './components/TestimonialComponent.vue';
import VideoSection from './components/VideoSection.vue';
</script>

<style scoped></style>
