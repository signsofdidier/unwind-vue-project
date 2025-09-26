<template>
  <section class="services-section">
    <div class="container-xl">
      <!-- subheading en titel -->
      <div class="row justify-content-center">
        <div class="col-md-8 text-center mb-5" data-aos="fade-up">
          <span class="subheading text-gold fw-bold text-uppercase"
            >Unwind Services</span
          >
          <h2 class="mt-2 mb-4">Explore Our Hotel Services</h2>
        </div>
      </div>

      <!-- Service ballonnekes -->
      <div class="row">
        <!-- Ballon -->
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center text-center mt-5"
          data-aos="fade-up"
        >
          <div href="#" class="services-balloon text-center">
            <div class="">
              <WifiIcon class="icon mb-3" />
            </div>
            <h2 class="">Free Wifi</h2>
          </div>
        </div>
        <!-- End ballon -->

        <!-- Ballon -->
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div href="#" class="services-balloon text-center">
            <div class="">
              <BookingIcon class="icon mb-3" />
            </div>
            <h2 class="">Easy Booking</h2>
          </div>
        </div>
        <!-- End ballon -->

        <!-- Ballon -->
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div href="#" class="services-balloon text-center">
            <div class="">
              <RestaurantIcon class="icon mb-3" />
            </div>
            <h2 class="">Restaurant</h2>
          </div>
        </div>
        <!-- End ballon -->

        <!-- Ballon -->
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div href="#" class="services-balloon text-center">
            <div class="">
              <PoolIcon class="icon mb-3" />
            </div>
            <h2 class="">Swimming Pool</h2>
          </div>
        </div>
        <!-- End ballon -->

        <!-- Ballon -->
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div href="#" class="services-balloon text-center">
            <div class="">
              <CosmeticsIcon class="icon mb-3" />
            </div>
            <h2 class="">Beauty & Health</h2>
          </div>
        </div>
        <!-- End ballon -->

        <!-- Ballon -->
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div href="#" class="services-balloon text-center">
            <div class="">
              <WifiIcon class="icon mb-3" />
            </div>
            <h2 class="">Help & Support</h2>
          </div>
        </div>
        <!-- End ballon -->
      </div>
    </div>
  </section>
</template>

<script setup>
import WifiIcon from '@/assets/icons/wifi.svg';
import BookingIcon from '@/assets/icons/booking.svg';
import RestaurantIcon from '@/assets/icons/restaurant.svg';
import PoolIcon from '@/assets/icons/pool.svg';
import CosmeticsIcon from '@/assets/icons/cosmetics.svg';
</script>
<style scoped>
.services-section {
  padding: 8em 0;
}
@media (max-width: 991px) {
  .services-section {
    padding: 4em 0;
  }
}
.services-balloon {
  width: 200px;
  height: 200px;
  padding: 30px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 5px 25px -2px;
  border-radius: 50% 50% 50% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
}

.services-balloon h2 {
  color: var(--black);
  font-size: 18px;
  font-weight: 600;
  font-family: var(--nunito);
}
.icon {
  width: 70px;
  height: 70px;
  fill: currentColor;
  color: var(--gold);
}

.services-balloon:hover {
  background-color: var(--gold);
}
.services-balloon:hover .icon {
  fill: currentColor;
  color: #fff;
}
.services-balloon:hover h2 {
  color: #fff;
}
</style>
