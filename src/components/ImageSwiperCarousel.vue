<template>
  <div class="container-fluid">
    <div class="row mb-3">
      <div class="col-12">
        <swiper
          :slidesPerView="1"
          :spaceBetween="15"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :speed="1000"
          :loop="true"
          :modules="modules"
          :breakpoints="{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
            1399: { slidesPerView: 4 },
            1920: { slidesPerView: 5 },
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="(item, index) in carouselItems" :key="index">
            <div
              class="slider-image"
              data-aos="fade-up"
              :data-aos-delay="isMobile ? 0 : index * 100"
            >
              <a
                class="overlay d-flex justify-content-center align-items-center gallery-lightbox"
                :href="item.image"
              >
                <i class="bi bi-search"></i>
              </a>
              <img class="img-fluid" :src="item.image" :alt="item.alt" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Pagination, Autoplay } from 'swiper/modules';
import { onMounted, ref } from 'vue';
import Glightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const modules = [Pagination, Autoplay];

const isMobile = ref(false);

// Maak nieuwe selector die je gebruikt in de html om te targetten
onMounted(() => {
  isMobile.value = window.innerWidth < 768;

  const lightbox = Glightbox({
    selector: '.gallery-lightbox', // alleen deze class
    touchNavigation: true,
    loop: true,
  });
});

const carouselItems = ref([
  {
    image: './images/gallery-1.jpg',
    alt: 'Beautiful Hotel Room',
  },
  {
    image: './images/gallery-2.jpg',
    alt: 'Beautiful Hotel Room',
  },
  {
    image: './images/gallery-3.jpg',
    alt: 'Beautiful Hotel Room',
  },
  {
    image: './images/gallery-4.jpg',
    alt: 'Beautiful Hotel Room',
  },
  {
    image: './images/gallery-5.jpg',
    alt: 'Beautiful Hotel Room',
  },
]);
</script>

<style scoped>
.mySwiper {
  width: 100%;
}

.slider-image {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
}
.slider-image a {
  text-decoration: none;
}
.slider-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  z-index: 0;
  transition: all 0.3s ease-in-out;
}
.slider-image .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
  z-index: 1;
}

.slider-image .overlay i {
  position: relative;
  font-size: 15px;
  font-weight: 800;
  color: #fff;
  width: 40px;
  height: 40px;
  background: var(--gold);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.slider-image:hover img {
  transform: scale(1.1);
}
.slider-image:hover .overlay {
  opacity: 1;
  visibility: visible;
}
</style>
