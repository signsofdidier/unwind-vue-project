<template>
  <a
    href="https://www.youtube.com/watch?v=NpEaa2P7qZI"
    class="d-flex justify-content-center glightbox"
    data-type="video"
  >
    <div class="video-icon d-flex align-items-center justify-content-center">
      <i class="bi bi-play-fill"></i>
    </div>
  </a>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

let lightbox = null;

onMounted(() => {
  lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
  });
});

onBeforeUnmount(() => {
  if (lightbox) {
    lightbox.destroy();
  }
});
</script>

<style scoped>
.video-icon {
  width: 80px;
  height: 80px;
  background-color: var(--gold);
  border-radius: 50%;
  animation: pulse 2s infinite;
}
.video-icon i {
  color: #fff;
  font-size: 50px;
}

@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(197, 168, 128, 0.4);
    -webkit-box-shadow: 0 0 0 0 rgba(197, 168, 128, 0.4);
    box-shadow: 0 0 0 0 rgba(197, 168, 128, 0.4);
  }

  70% {
    -moz-box-shadow: 0 0 0 30px rgba(197, 168, 128, 0);
    -webkit-box-shadow: 0 0 0 30px rgba(197, 168, 128, 0);
    box-shadow: 0 0 0 30px rgba(197, 168, 128, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(197, 168, 128, 0);
    -webkit-box-shadow: 0 0 0 0 rgba(197, 168, 128, 0);
    box-shadow: 0 0 0 0 rgba(197, 168, 128, 0);
  }
}
</style>
