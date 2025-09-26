<template>
  <section class="testimonial-section">
    <div class="container-xl">
      <!-- titels -->
      <div class="row justify-content-center mb-5">
        <div
          class="col-xl-8 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="subheading text-uppercase text-gold fw-semibold mb-3">
            Testimonial
          </div>
          <h2 class="mb-4">Happy Guests</h2>
        </div>
      </div>

      <!-- Swiper slider -->
      <CardSwiper data-aos="fade-up" data-aos-delay="400" />
    </div>
  </section>
</template>

<script setup>
import CardSwiper from './CardSwiper.vue';
</script>

<style scoped>
.testimonial-section {
  padding: 8em 0;
}

@media (max-width: 991px) {
  .testimonial-section {
    padding: 4em 0;
  }
}
</style>
