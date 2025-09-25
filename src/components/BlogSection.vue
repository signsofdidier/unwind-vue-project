<template>
  <section class="blog-section">
    <div class="container-xl">
      <!-- Titels -->
      <div class="row justify-content-center mb-5">
        <div class="col-md-8 text-center">
          <div class="subheading fw-bold text-uppercase text-gold mb-3">
            Our Blog
          </div>
          <h2 class="mb-4">Recent Blog</h2>
        </div>
      </div>

      <div class="row">
        <!-- Blog cards -->
        <BlogCard />
      </div>
    </div>
  </section>
</template>

<script setup>
import BlogCard from './BlogCard.vue';
</script>

<style scoped>
section.blog-section {
  padding: 8em 0;
}

@media (max-width: 991px) {
  section.blog-section {
    padding: 6em 0;
  }
}
</style>
