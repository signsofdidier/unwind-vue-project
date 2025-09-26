<template>
  <!-- Menu Card -->
  <div
    v-for="(item, index) in props.items.slice(-8)"
    :key="index"
    class="col-md-6"
  >
    <div data-aos="fade-left" :data-aos-delay="isMobile ? 0 : index * 100">
      <div class="menu-card d-flex align-items-center p-4">
        <!-- image -->
        <img class="img-fluid" :src="item.image" :alt="item.name" />
        <!-- text -->
        <div class="w-100 d-flex justify-content-between">
          <h3 class="ps-3">{{ item.name }}</h3>
          <span class="price">{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
  <!-- End menu card -->
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 768;
});

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
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
