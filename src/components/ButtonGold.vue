<template>
  <a
    :is="to ? 'router-link' : 'a'"
    :to="to"
    :href="href"
    class="btn bg-gold text-white fw-bold p-4 py-3 border rounded-0 text-uppercase justify-content-center align-items-center gap-2"
    >{{ text }} <i v-if="arrow" class="fi fi-rr-arrow-small-right"></i
  ></a>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: '#',
  },
  to: {
    type: [String, Object],
    default: null,
  },
  arrow: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
a,
router-link {
  font-size: 12px;
  font-family: var(--nunito);
  font-weight: 700px;
  letter-spacing: 1px;
}

a:first-child,
router-link:first-child {
  border: 1px solid var(--gold) !important;
}

a i,
router-link i {
  transition: transform 0.2s ease;
}

a:hover i,
router-link a:hover i {
  transform: translateX(5px);
}
</style>
