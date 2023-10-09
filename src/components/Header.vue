<template>
  <header class="bg-dark bg-opacity-75 py-5" :style="heroStyle">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">Vintage Pedal Effects for your DAW</h1>
      </div>
    </div>
  </header>
</template>

<script setup>
import headerImage from '@/assets/hero.jpg'

const hero = headerImage
const heroStyle = {
  backgroundImage: `url(${hero})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}
</script>
