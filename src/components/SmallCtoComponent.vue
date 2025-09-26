<template>
  <section>
    <div class="container-xl">
      <div class="row justify-content-center py-5">
        <div class="col-11 col-xl-8">
          <div class="row align-items-center">
            <div class="col-xl-8">
              <span class="subheading text-gold fw-bold text-uppercase"
                >Find Best Hotel For Leaving</span
              >
              <h1 class="mt-3">Find the Best Hotel in Your Next Vacation</h1>
            </div>
            <div class="col-xl-4">
              <ButtonGold text="Book now" href="#" :arrow="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import ButtonGold from './ButtonGold.vue';
</script>
<style scoped>
section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('/images/bg_1.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

h1 {
  font-size: 40px;
  color: #fff;
}
</style>
