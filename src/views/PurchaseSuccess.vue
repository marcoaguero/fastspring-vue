<template>
  <section class="py-5 flex-grow-1" :style="heroStyle">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">
          <p>Thanks for your purchase and...</p>
          <p>...make sure to ROCK on!</p>
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup>
import hero from '@/assets/thank-you.jpg'

const heroImage = hero

const heroStyle = {
  backgroundImage: `url(${heroImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}
</script>
