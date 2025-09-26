<template>
  <header>
    <section class="hero-section">
      <div
        class="hero-section-content d-flex align-items-center justify-content-center"
      >
        <div class="container-xl">
          <div class="row justify-content-center align-items-center">
            <div
              class="hero-section-content-text col-lg-10 text-center"
              data-aos="fade-up"
            >
              <!-- Breadcrumb -->
              <div class="breadcrumb-wrapper">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb d-flex justify-content-center">
                    <li
                      v-for="(crumb, index) in breadcrumbs"
                      :key="index"
                      class="breadcrumb-item"
                    >
                      <template v-if="index < breadcrumbs.length - 1">
                        <RouterLink :to="crumb.path">{{
                          crumb.name
                        }}</RouterLink>
                      </template>
                      <template v-else>
                        <span>{{ crumb.name }}</span>
                      </template>
                    </li>
                  </ol>
                </nav>
                <!-- END Breadcrumb -->
              </div>
              <h1 class="mt-2">{{ title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { computed } from 'vue';
import { defineProps } from 'vue';

const route = useRoute();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

// Dynamische breadcrumb array
const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(Boolean); // split path en verwijder lege strings
  const crumbs = [{ name: 'Home', path: '/' }]; // altijd Home als eerste

  pathArray.forEach((segment, index) => {
    crumbs.push({
      name: segment.charAt(0).toUpperCase() + segment.slice(1), // eerste letter hoofdletter
      path: '/' + pathArray.slice(0, index + 1).join('/'),
    });
  });

  return crumbs;
});
</script>

<style scoped>
header {
  position: relative;
}

.hero-section {
  width: 100%;
  height: 700px;
  background-color: var(--dark-gray);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('./images/bg_3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  color: #fff;
}

.hero-section h1 {
  font-size: 70px;
}

.hero-section-content {
  width: 100%;
  height: 100%;
}

.subheading {
  letter-spacing: 1px;
}

.breadcrumb {
  background: transparent;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #fff;
}

.breadcrumb a {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
}

.breadcrumb span {
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
}

.breadcrumb li + li::before {
  content: '>'; /* of gebruik een icon zoals FontAwesome: "\f061" */
  /* ruimte rondom het icoon */
  color: #fff; /* kleur van het icoon */
  font-size: 14px;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 40px;
  }
}
</style>
