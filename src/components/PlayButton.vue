<template>
  <a
    href="https://www.youtube.com/watch?v=NpEaa2P7qZI"
    target="_blank"
    class="d-flex justify-content-center"
  >
    <div class="video-icon d-flex align-items-center justify-content-center">
      <i class="bi bi-play-fill"></i>
    </div>
  </a>
</template>

<script setup></script>

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
