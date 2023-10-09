<template>
  <section class="py-5 flex-grow-1">
    <Header />
    <div class="container px-4 px-lg-5 mt-5">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-4 row-cols-xl-4 justify-content-center">
        <ProductCard
          v-for="product in products"
          :key="product.productId"
          :productId="product.productId"
          actions="Add"
          :buttonTitle="product.buttonTitle"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from '../components/Header.vue'
import ProductCard from '../components/ProductCard.vue'
const products = [
  { productId: 'fxlab-subscription', buttonTitle: 'Subscribe' },
  { productId: 'distorsion-60s', buttonTitle: 'Add to cart' },
  { productId: 'echo-80s', buttonTitle: 'Add to cart' },
  { productId: 'reverb-70s', buttonTitle: 'Add to cart' }
  // Add more products as needed
]
</script>
