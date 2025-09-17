<template>
  <swiper
    :slides-per-view="1"
    :space-between="30"
    :pagination="{ clickable: true }"
    :modules="modules"
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
    :speed="1000"
    :breakpoints="{
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    }"
    class="mySwiper"
  >
    <swiper-slide v-for="item in testimonials" :key="item.id">
      <div class="card bg-white border-0 p-4">
        <!-- Card header -->
        <div class="card-header bg-white border-0">
          <div class="row align-items-center">
            <!-- Card header image -->
            <div class="col-md-3">
              <div class="card-image">
                <img :src="item.image" class="img-fluid" alt="..." />
              </div>
            </div>
            <!-- Card header text -->
            <div class="col-md-9 ps-4">
              <p class="name">{{ item.name }}</p>
              <span class="position">{{ item.position }}</span>
            </div>
          </div>
        </div>

        <div class="card-body h-100">
          <p class="card-text mb-0 pb-0">
            {{ item.testimonial }}
          </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import axios from 'axios';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Swiper modules
import { Pagination, Autoplay } from 'swiper/modules';
import { onMounted, ref } from 'vue';

// In <script setup>, we can just define a const
const modules = [Pagination, Autoplay];

const testimonials = ref([]);
onMounted(async () => {
  try {
    // BASE_URL verwijst naar '/root/' in mijn setup
    const response = await axios.get('./testimonials.json');
    testimonials.value = response.data;
  } catch (error) {
    console.error('Fout bij het ophalen van testimonials', error);
  }
});
</script>

<style scoped>
.mySwiper {
  width: 100%;
  padding-bottom: 40px; /* ruimte voor bolletjes */
}

.swiper-slide .card {
  width: 100%; /* card vult de slide */
}

.card-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
}

.card img {
  object-fit: cover;
}

.card-header .name {
  font-weight: 700;
  font-size: 22px;
  color: #222222;
  margin-bottom: 0;
}

.card-header .position {
  font-size: 13px;
  text-transform: uppercase;
  color: #c5a880;
  font-weight: 600;
}

/* swiper bullets style */
.mySwiper ::v-deep(.swiper-pagination-bullet) {
  background: var(--text-gray);
}
.mySwiper ::v-deep(.swiper-pagination-bullet-active) {
  background: var(--gold);
}
</style>
