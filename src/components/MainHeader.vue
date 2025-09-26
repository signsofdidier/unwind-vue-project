<template>
  <header>
    <section class="hero-section">
      <div
        class="hero-section-content d-flex align-items-center justify-content-center"
      >
        <div class="container-xl">
          <div class="row justify-content-center align-items-center">
            <div class="hero-section-content-text col-lg-10 text-center">
              <span class="subheading text-uppercase fw-bold"
                >Enjoy Your Wonderful Holidays With A Great Luxury Experience!
              </span>
              <h1 class="fw-bold mt-2">Most Relaxing Place</h1>
              <div
                class="cto-buttons mt-4 d-flex justify-content-center flex-column flex-md-row gap-2"
              >
                <ButtonGold text="Take a tour" href="#" :arrow="true" />
                <TransparentButton text="learn more" href="#" :arrow="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script setup>
import ButtonGold from './ButtonGold.vue';
import TransparentButton from './TransparentButton.vue';
</script>

<style scoped>
header {
  position: relative;
}

.hero-section {
  min-height: 100vh;
  background-color: var(--dark-gray);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('./images/bg_1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  width: 100%;
  color: #fff;
}

.hero-section-content {
  width: 100%;
  min-height: calc(100vh - 90px);
}

.hero-section-content-text {
  margin-top: 180px;
}

@media (max-width: 991px) {
  .hero-section {
    min-height: calc(100vh - 100px);
  }
  .hero-section-content-text {
    margin-top: 0;
  }
}

.subheading {
  letter-spacing: 1px;
}

.cto-buttons a {
  font-size: 12px;
  font-family: var(--nunito);
  font-weight: 700px;
  letter-spacing: 1px;
}

.cto-buttons a:first-child {
  border: 1px solid var(--gold) !important;
}

.cto-buttons a i {
  transition: transform 0.2s ease;
}

.cto-buttons a:hover i {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 40px;
  }
}
</style>
