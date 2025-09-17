<template>
  <footer>
    <div class="footer-top">
      <div class="container-xl">
        <div class="row d-flex justify-content-between">
          <div class="col-md-6 col-lg-3">
            <!-- Navbar brand logo -->
            <a class="navbar-brand" href="#">
              <span class="d-flex flex-column">
                Unwind
                <small>Hotel Booking</small>
              </span>
            </a>
            <p class="text-gray mt-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <ul class="footer-social-icons m-0 p-0 d-flex gap-2 mt-4">
              <li>
                <a href=""><i class="bi bi-facebook text-gold"></i></a>
              </li>
              <li>
                <a href=""><i class="bi bi-instagram text-gold"></i></a>
              </li>
              <li>
                <a href=""><i class="bi bi-youtube text-gold"></i></a>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div class="col-md-6 col-lg-4">
            <h2>Services</h2>
            <div class="row g-0 footer-list-items">
              <div class="col-lg-6">
                <ul>
                  <li>
                    <a href="#"
                      ><i class="bi bi-chevron-right"></i> Free Wifi</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="bi bi-chevron-right"></i> Easy Booking</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="bi bi-chevron-right"></i> Restaurant</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="bi bi-chevron-right"></i> Swimming Pool</a
                    >
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <li>
                  <a href="#"
                    ><i class="bi bi-chevron-right"></i> Beauty & Health</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="bi bi-chevron-right"></i> 60" Flatscreen TV</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="bi bi-chevron-right"></i> Cold Aircondition</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="bi bi-chevron-right"></i> Help & Support</a
                  >
                </li>
              </div>
            </div>
          </div>

          <!-- Quick links -->
          <div class="col-md-6 col-lg-2 footer-list-items">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#"><i class="bi bi-chevron-right"></i> Home</a>
              </li>
              <li>
                <a href="#"><i class="bi bi-chevron-right"></i> About</a>
              </li>
              <li>
                <a href="#"><i class="bi bi-chevron-right"></i> Rooms</a>
              </li>
              <li>
                <a href="#"><i class="bi bi-chevron-right"></i> Resto & Bar</a>
              </li>
            </ul>
          </div>

          <!-- Have a question? -->
          <div class="col-md-6 col-lg-3 footer-list-items">
            <h2>Have a Question?</h2>
            <ul>
              <li>
                <a href="#"
                  ><i class="bi bi-map-fill me-3 text-gold"></i> 203 Fake St.
                  Mountain View, San Francisco, California, USA</a
                >
              </li>
              <li>
                <a href="tel:	+2 392 3929 210"
                  ><i class="bi bi-telephone-fill me-3 text-gold"></i> +2 392
                  3929 210</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="bi bi-envelope-fill me-3 text-gold"></i>
                  info@unwind.com</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer bottom -->
    <div class="footer-bottom">
      <div class="container-xl">
        <div class="row">
          <div class="col-12">
            <div class="col-12 py-5 d-block d-lg-flex justify-content-between">
              <p class="mb-0 text-gray text-center">
                Copyright ©2025 All rights reserved
              </p>
              <p class="mb-0 text-gray text-center">
                This website is created by
                <span class="text-gold">Didier Vanassche</span> | designtemplate
                from Colorlib
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer .footer-top {
  padding: 8em 0;
  background-color: rgb(26, 26, 26);
}

.navbar-brand {
  font-size: 25px !important;
  color: #fff;
  font-family: var(--nunito);
  font-weight: 900;
  text-transform: uppercase;
}

.navbar-brand span {
  line-height: 1.1;
}

.navbar-brand small {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
}

footer h2 {
  color: #fff;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Nunito', Arial, sans-serif;
}

/* Social icons */

.footer-social-icons li {
  list-style: none;
  width: 40px;
  height: 40px;
  background-color: var(--dark-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.footer-list-items ul {
  padding: 0;
  margin: 0;
}
.footer-list-items li {
  list-style: none;
  margin-bottom: 10px;
}
.footer-list-items a {
  text-decoration: none;
  color: var(--text-gray);
}
.footer-list-items li:hover a {
  color: var(--gold);
}

/* Footer bottom */
footer .footer-bottom {
  background-color: #151515;
}
footer .footer-bottom p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}
</style>
