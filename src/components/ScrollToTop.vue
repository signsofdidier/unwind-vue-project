<template>
  <button
    v-show="visible"
    class="scroll-to-top"
    @click="scrollTop"
    aria-label="Scroll to top"
  >
    ↑
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

// Laat de button zien als er meer dan 300px is gescrold
const handleScroll = () => {
  visible.value = window.scrollY > 300;
};

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // smooth scroll
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #000;
  color: #fff;
  border: 1px solid var(--gold);
  border-radius: 5px;
  width: 45px;
  height: 45px;
  font-size: 20px;
  cursor: pointer;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}
.scroll-to-top:hover {
  background-color: var(--gold);
}
</style>
