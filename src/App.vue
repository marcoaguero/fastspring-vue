<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar></Navbar>
  <RouterView />
  <Footer></Footer>
</template>
