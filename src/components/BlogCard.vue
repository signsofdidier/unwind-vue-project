<template>
  <div
    v-for="item in blogItems.slice(-4)"
    :key="item.id"
    class="col-md-6 col-xl-3 mb-4 mb-lg-0 d-flex"
  >
    <div class="card border-0 rounded-0 d-flex flex-column w-100">
      <a href="#" class="card-image-link"
        ><img :src="item.image" class="card-img-top rounded-0" :alt="item.name"
      /></a>
      <div class="card-body p-4 d-flex flex-column w-100">
        <p class="author-info d-flex justify-content-between">
          <span class="fw-bold text-gray">{{ item.author }}</span>
          <span class="text-gold">{{ item.created_at }}</span>
        </p>
        <a href="#" class="card-title mb-3">{{ item.title }}</a>
        <p class="card-text text-gray mb-4 flex-grow-1">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const blogItems = ref([]);

onMounted(async () => {
  try {
    // BASE_URL verwijst naar '/root/' in mijn setup
    const response = await axios.get('./blogs.json');
    blogItems.value = response.data;
  } catch (error) {
    console.error('Fout bij ophalen van blog:', error);
  }
});
</script>

<style scoped>
.card {
  box-shadow: 0px 5px 25px -2px rgba(0, 0, 0, 0.04);
}

.card-image-link {
  overflow: hidden;
}
.card-image-link img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
}
.card:hover img {
  transform: scale(1.1);
}
.card:hover a.card-title {
  color: var(--gold);
}

.author-info {
  font-size: 13px;
  font-family: nunito;
  text-transform: uppercase;
}

a.card-title {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: none;
  font-family: var(--old);
  transition: all 0.1s ease;
}
a.card-title:hover {
  color: var(--gold);
}
p {
  line-height: 1.6;
}
</style>
