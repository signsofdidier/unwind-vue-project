<template>
  <nav class="navbar navbar-expand-lg navbar-dark pt-lg-4">
    <div class="container-xl py-3 py-lg-0">
      <!-- Navbar brand logo -->
      <a class="navbar-brand" href="#">
        <span class="d-flex flex-column">
          Unwind
          <small>Hotel Booking</small>
        </span>
      </a>

      <!-- Hamburger icon -->
      <button
        class="navbar-toggler text-uppercase fw-bold d-flex align-items-center gap-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="fi fi-br-menu-burger"></i>
        <span class="mb-1">Menu</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Rooms</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Resto & Bar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  width: 100%;
  z-index: 1000;
  background: transparent !important;
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

.nav-item .nav-link {
  font-size: 13px;
  font-family: var(--nunito);
  font-weight: 700;
  color: #fff;
  padding: 19px 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.navbar-toggler {
  border: none;
}
.navbar-toggler:focus {
  border: none;
  box-shadow: none;
  outline: none;
}

@media (max-width: 991px) {
  .navbar {
    background: var(--black) !important;
  }
  .navbar ul {
    padding-top: 30px;
  }
  .nav-item .nav-link {
    font-size: 13px;
    font-family: var(--nunito);
    font-weight: 700;
    color: #fff;
    padding: 0 10px 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>
