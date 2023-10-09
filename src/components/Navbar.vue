<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom fixed-top bg-light">
    <div class="container px-4 px-lg-5">
      <a href="/" class="navbar-brand">
        <img :src="image" alt="FXLab" width="50" class="d-inline-block align-top" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/"> Home </a>
          </li>
        </ul>
        <form class="d-flex">
          <a class="btn btn-outline-dark" href="#" data-fsc-action="ViewCart">
            <i class="bi-cart-fill me-1"></i>
            Cart
            <span class="ms-1" id="order-total" data-fsc-order-total></span>
          </a>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from '@/assets/logo.png'
const image = logo
</script>
