<template>
  <section class="counter-section" ref="counterSection">
    <div class="container-xl">
      <div class="row justify-content-center">
        <!-- counterpart -->
        <div
          v-for="(counter, index) in counterList"
          :key="index"
          class="counter-list col-12 col-md-6 col-lg-3 text-center"
        >
          <div class="d-flex flex-column text-center">
            <span class="number text-gold fw-bold">{{
              counter.current.toLocaleString()
            }}</span>
            <span class="caption text-gray">{{ counter.caption }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const counterList = ref([
  { number: 26354, caption: 'Happy Guests', current: 0 },
  { number: 264, caption: 'Rooms', current: 0 },
  { number: 1659, caption: 'Staffs', current: 0 },
  { number: 365, caption: 'Destinations', current: 0 },
]);

const counterSection = ref(null);
const hasCounted = ref(false);

function animateCount(totalDuration = 3000) {
  const start = performance.now();

  // Bereken de animatie duur per counter op basis van hun waarde
  // Kleinere getallen krijgen een kortere animatie duur
  const maxNumber = Math.max(...counterList.value.map((c) => c.number));

  const counterDurations = counterList.value.map((counter) => {
    // Bereken proportionele duur: kleinere getallen = kortere animatie
    const ratio = counter.number / maxNumber;
    const minDuration = totalDuration * 0.3; // Minimaal 30% van totale duur
    return minDuration + (totalDuration - minDuration) * ratio;
  });

  function update(now) {
    const elapsed = now - start;

    counterList.value.forEach((counter, index) => {
      const duration = counterDurations[index];
      const progress = Math.min(elapsed / duration, 1);

      // Voeg een easing functie toe voor vloeiendere animatie
      const easedProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      counter.current = Math.floor(easedProgress * counter.number);
    });

    // Blijf animeren tot alle counters klaar zijn
    const allCompleted = counterList.value.every((counter, index) => {
      const duration = counterDurations[index];
      return elapsed >= duration;
    });

    if (!allCompleted) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasCounted.value) {
          hasCounted.value = true;
          animateCount(4000); // totale animatie duurt 4 seconden
        }
      });
    },
    { threshold: 0.3 } // start als 30% van de sectie zichtbaar is
  );

  if (counterSection.value) observer.observe(counterSection.value);
});
</script>

<style scoped>
section.counter-section {
  background: var(--dark-gray);
}

.counter-list {
  padding: 90px 40px;
}
@media (max-width: 991px) {
  .counter-list {
    padding: 50px 0;
  }
}

.counter-list .number {
  font-size: 40px;
}
</style>
