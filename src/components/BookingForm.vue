<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="booking-form">
            <div class="row g-0">
              <div class="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                <div class="form-group ps-4 border-0">
                  <label for="#" class="fw-bold text-uppercase">Check-In</label>
                  <div class="form-field d-flex">
                    <div class="icon">
                      <i class="bi bi-calendar"></i>
                    </div>
                    <input
                      type="text"
                      id="checkin"
                      class="form-control arrival_date"
                      placeholder="Check-In Date"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                <div class="form-group ps-4 border-0">
                  <label for="#" class="fw-bold text-uppercase"
                    >Check-Out</label
                  >
                  <div class="form-field d-flex">
                    <div class="icon">
                      <i class="bi bi-calendar"></i>
                    </div>
                    <input
                      type="text"
                      id="checkout"
                      class="form-control arrival_date"
                      placeholder="Check-Out Date"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                <div class="form-group ps-4 border-0">
                  <label for="#" class="fw-bold text-uppercase">Rooms</label>
                  <div class="form-field d-flex">
                    <div class="icon">
                      <i class="bi bi-caret-down-fill"></i>
                    </div>
                    <!-- Select -->
                    <select class="form-control" name="" id="">
                      <option value="">Suite</option>
                      <option value="">Family Room</option>
                      <option value="">Classic Room</option>
                      <option value="">Superior Room</option>
                      <option value="">Luxury Room</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                <div class="form-group ps-4 border-0">
                  <label for="#" class="fw-bold text-uppercase">Guests</label>
                  <div class="form-field d-flex">
                    <div class="icon">
                      <i class="bi bi-caret-down-fill"></i>
                    </div>
                    <!-- Select -->
                    <select class="form-control" name="" id="">
                      <option value="">1 person</option>
                      <option value="">2 persons</option>
                      <option value="">3 persons</option>
                      <option value="">4 persons</option>
                      <option value="">5 persons</option>
                      <option value="">5 persons</option>
                      <option value="">6-9 persons</option>
                      <option value="">+10 persons</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Check Availability btn -->
              <div class="col-md-12 col-lg d-flex bg-gold g-lg-0">
                <div class="form-group w-100 d-flex border-0 px-lg-4">
                  <div class="w-100 d-flex align-items-center">
                    <a
                      href="#"
                      type="submit"
                      class="d-flex justify-content-center align-items-center align-self-stretch form-control btn btn-primary py-lg-4 py-xl-0 text-uppercase text-white fw-bold lh-1 py-4 py-lg-0 px-lg-3"
                      ><span>Check Availability</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { TempusDominus } from '@eonasdan/tempus-dominus';
import '@eonasdan/tempus-dominus/dist/css/tempus-dominus.min.css';

onMounted(() => {
  new TempusDominus(document.getElementById('checkin'), {
    display: {
      components: {
        calendar: true,
        date: true,
        month: true,
        year: true,
      },
    },
  });

  new TempusDominus(document.getElementById('checkout'), {
    display: {
      components: {
        calendar: true,
        date: true,
        month: true,
        year: true,
      },
    },
  });
});
</script>

<style scoped>
section {
  position: relative;
  margin-top: -80px;
  z-index: 5;
}

.booking-form {
  background-color: var(--dark-gray);
}
.booking-form label {
  color: #fff;
  letter-spacing: 1px;
  font-size: 12px;
  margin-bottom: 10px;
}
.booking-form .icon i {
  color: rgba(255, 255, 255, 0.3);
  width: 30px;
}
.booking-form .form-control {
  padding: 0;
  padding-left: 10px;
  border-radius: 0;
  border: none;
  width: 100%;
  height: inherit;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.4);
  background: transparent;
}

.booking-form .form-control::placeholder {
  color: rgba(255, 255, 255, 0.4);
  opacity: 1;
}
.booking-form .form-control:focus {
  outline: none;
  box-shadow: none;
  border: none !important;
}

/* Select */
.booking-form select.form-control {
  background: transparent;
  appearance: none; /* verwijdert default browser arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
}

/* Placeholder-achtige kleur voor de options */
.booking-form select.form-control option {
  background-color: var(--dark-gray);
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  padding: 15px 10px !important;
}

/* geselecteerde option */
.booking-form select.form-control option:checked {
  background-color: #444;
  color: #fff;
}

/* Focus stijl */
.booking-form select.form-control:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

.tempus-dominus-widget {
  background-color: var(--dark-gray);
  color: #fff;
}
</style>
