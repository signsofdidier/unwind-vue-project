<template>
  <section class="about-section container-xl">
    <div class="row g-xl-5">
      <!-- About section service blocks -->
      <div class="col-md-6">
        <div class="row">
          <!-- service block 1 -->
          <div class="col-md-6">
            <!-- About Service block -->
            <article class="about-services">
              <div class="services w-100 p-4 text-center mb-md-4">
                <img
                  class="icon mb-4"
                  src="/images/icons/pillow.svg"
                  alt=""
                  aria-hidden="true"
                />
                <h3 class="mb-3">Cozy Room</h3>
                <p class="text-gray">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia.
                </p>
              </div>
              <!-- Service block image -->
              <img
                class="w-100 services-img"
                src="/images/f-services.jpg"
                alt="Hotel service: Cozy room"
              />
            </article>
          </div>
          <!-- End service block 1 -->

          <!-- service block 2 -->
          <div class="col-md-6">
            <!-- About Service block -->
            <article class="about-services">
              <!-- Service block image -->
              <img
                class="w-100 services-img mb-md-4"
                src="/images/f-services-2.jpg"
                alt="Hotel service: Special offers"
              />
              <div class="services w-100 p-4 text-center">
                <img
                  class="icon mb-4"
                  src="/images/icons/star.svg"
                  alt=""
                  aria-hidden="true"
                />
                <h3 class="mb-3">Special Offers</h3>
                <p class="text-gray">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia.
                </p>
              </div>
            </article>
          </div>
          <!-- End service block 1 -->
        </div>
      </div>

      <!-- About section text block -->
      <div
        class="col-md-6 d-flex flex-column justify-content-center align-items-start"
      >
        <span class="subheading mb-3 text-gold fw-bold text-uppercase"
          >About us</span
        >
        <h2 class="mb-4">Unwind A Hotel Booking Agency</h2>
        <p class="text-gray mb-5">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <ButtonGold text="Book your room now" href="#" :arrow="false" />
      </div>
    </div>
  </section>
</template>
<script setup>
import ButtonGold from './ButtonGold.vue';
import TransparentButton from './TransparentButton.vue';
</script>

<style scoped>
.about-section {
  padding: 8em 0;
}

.about-section .icon {
  width: 60px;
  height: 61px;
}
.about-services .services {
  transition: 0.2s ease;
}
.about-section .about-services p {
  line-height: 1.8;
}
.about-section .about-services .services {
  box-shadow: 0px 5px 25px -2px rgba(0, 0, 0, 0.08);
}
.about-section .about-services img.services-img {
  height: 230px;
  object-fit: cover;
}

.about-services:hover .services {
  background-color: var(--dark-gray);
  color: white;
}
</style>
