<template>
  <section>
    <div class="container-xl">
      <!-- titles -->
      <div class="row justify-content-center mb-5">
        <div class="col-xl-8 text-center mb-3" data-aos="fade-up">
          <span class="subheader text-gold text-uppercase fw-bold"
            >Our rooms</span
          >
          <h2 class="mt-3">Featured Rooms</h2>
        </div>
      </div>

      <!-- features -->
      <div class="row">
        <!-- feature card -->
        <div class="col-xl-4 mb-4 mb-lg-5 md-xl-0" data-aos="flip-left">
          <div class="featured-room-card">
            <!-- text -->
            <div class="featured-room-card-info text-center p-5 order-xl-1">
              <h3>Suite Room</h3>
              <p class="featured-room-text mt-3 mb-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div>
                <span class="night-price me-xl-4">$450 / night</span>
                <a class="night-btn" href="#">Book now</a>
              </div>
            </div>
            <!-- image -->
            <div class="featered-room-image order-xl-2">
              <div class="overlay"></div>
              <img class="" src="/images/room-1.jpg" alt="Suite Room" />
            </div>
          </div>
        </div>
        <!-- end featured card -->

        <!-- feature card -->
        <div
          class="col-xl-4 mb-4 mb-lg-5 md-xl-0"
          data-aos="flip-left"
          data-aos-delay="100"
        >
          <div class="featured-room-card">
            <!-- text -->
            <div class="featured-room-card-info text-center p-5 order-xl-2">
              <h3>Family Room</h3>
              <p class="featured-room-text mt-3 mb-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div>
                <span class="night-price me-xl-4">$450 / night</span>
                <a class="night-btn" href="#">Book now</a>
              </div>
            </div>
            <!-- image -->
            <div class="featered-room-image order-xl-1">
              <div class="overlay"></div>
              <img class="" src="/images/room-2.jpg" alt="Suite Room" />
            </div>
          </div>
        </div>
        <!-- end featured card -->

        <!-- feature card -->
        <div class="col-xl-4" data-aos="flip-left" data-aos-delay="200">
          <div class="featured-room-card">
            <!-- text -->
            <div class="featured-room-card-info text-center p-5 order-xl-1">
              <h3>Deluxe Room</h3>
              <p class="featured-room-text mt-3 mb-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div>
                <span class="night-price me-xl-4">$450 / night</span>
                <a class="night-btn" href="#">Book now</a>
              </div>
            </div>
            <!-- image -->
            <div class="featered-room-image order-xl-2">
              <div class="overlay"></div>
              <img class="" src="/images/room-3.jpg" alt="Suite Room" />
            </div>
          </div>
        </div>
        <!-- end featured card -->
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  padding: 8em 0;
}

@media (max-width: 991px) {
  section {
    padding: 4em 0;
  }
}

.featured-room-card {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 25px -2px rgba(0, 0, 0, 0.08);

  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}
h3 {
  font-size: 30px;
}
p.featured-room-text {
  color: var(--text-gray);
}

.night-price {
  font-size: 14px;
  color: var(--gold);
  font-weight: 700;
  text-transform: uppercase;
}
.night-btn {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  color: black;
  text-decoration: none;
  padding: 4px 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.featered-room-image {
  position: relative;
}
.featered-room-image img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.featured-room-card:hover .featured-room-card-info {
  background-color: var(--dark-gray);
}
.featured-room-card:hover h3,
.featured-room-card:hover a {
  color: white;
}

.featured-room-card:hover a {
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.featured-room-card:hover .featered-room-image .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.featured-room-card-info,
.featured-room-card h3,
.featured-room-card a,
.overlay {
  transition: all 0.3s ease; /* zorgt voor soepele animatie */
}
</style>
