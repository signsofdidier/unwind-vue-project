<template>
  <section class="restaurant-section">
    <div class="container-fluid">
      <!-- Titel -->
      <div class="row justify-content-center mb-5">
        <div class="col-md-8 text-center">
          <div class="subheader fw-semibold text-uppercase text-gold mb-3">
            Resto & Bar
          </div>
          <h2>Restaurant & Bar</h2>
        </div>
      </div>

      <!-- menu section -->
      <div class="row menu-section">
        <!-- Big image left -->
        <div
          class="menu-big-image col-md-12 col-xl-5 d-flex align-items-stretch"
        >
          <img
            class="w-100"
            src="/images/resto-bar.jpg"
            alt="Restaurant & Bar"
          />
          <span
            class="restaurant-icon d-flex justify-content-center align-items-center"
            ><restaurantIcon class="icon"
          /></span>
        </div>

        <!-- Menu cards col -->
        <div class="col-md-12 col-xl-7 ps-xl-5">
          <div class="row g-md-2">
            <!-- Menu Card -->
            <MenuCard :items="menuItems" />
            <!-- End menu card -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import RestaurantIcon from '@/assets/icons/restaurant.svg';
import MenuCard from './MenuCard.vue';

const menuItems = ref([]);

onMounted(async () => {
  try {
    // BASE_URL verwijst naar '/root/' in mijn setup
    const response = await axios.get('./menu.json'); // haalt JSON op uit public folder
    menuItems.value = response.data;
  } catch (error) {
    console.error('Fout bij ophalen van menu:', error);
  }
});
</script>

<style scoped>
.restaurant-section {
  padding: 8em 0;
}
.menu-big-image {
  position: relative;
  /* max-height: 536px; */
}

@media (min-width: 1760px) {
  .menu-big-image {
    max-height: 536px;
  }
}

.menu-big-image img {
  object-fit: cover;
  filter: brightness(0.7) contrast(1.1);
}

.restaurant-icon {
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
  width: 100px;
  height: 120px;
  background-color: var(--gold);
  border-radius: 5px;
}

.restaurant-icon .icon {
  width: 60px;
  height: 61px;
  fill: currentColor;
  color: #fff;
}

/* Menu card css */
.menu-card {
  background-color: #fff;
  transition: all 0.1s ease;
}

.menu-card img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 1/1;
}
.menu-card h3 {
  font-size: 19px;
  font-family: var(--nunito);
  font-weight: 600;
  color: var(--black);
}
.menu-card .price {
  font-size: 19px;
  font-family: var(--nunito);
  font-weight: 600;
  color: var(--gold);
}

/* hover */
.menu-card:hover {
  background-color: var(--dark-gray);
}
.menu-card:hover h3 {
  color: #fff;
}
</style>
