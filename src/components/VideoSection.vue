<template>
  <section class="video-section">
    <div class="container-xl">
      <div class="row justify-content-center">
        <div
          class="video-section-height col-md-10 d-flex justify-content-center align-items-center text-center"
        >
          <div>
            <div class="subheading mb-3">Watch our luxurious hotel</div>
            <h3 class="mb-3">Take A Tour</h3>
            <PlayButton />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PlayButton from './PlayButton.vue';
</script>

<style scoped>
.video-section {
  width: 100%;
  height: 600px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('/images/bg_2.jpg');
  background-size: cover;
  background-position: center center;
}

.video-section-height {
  height: 600px;
}

.subheading {
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
}

h3 {
  color: #fff;
  font-size: 70px;
  font-weight: 400;
}
</style>
