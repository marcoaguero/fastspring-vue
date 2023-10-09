<template>
  <div class="col mb-5">
    <div class="card h-100">
      <a :href="`/${productId}`">
        <img class="card-img-top" :src="imagePath" :alt="productId" />
      </a>
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder" v-bind:data-fsc-item-path="productId" data-fsc-item-display></h5>
          <span v-bind:data-fsc-item-path="productId" data-fsc-item-price></span>
        </div>
      </div>
      <Button :actions="actions" :title="buttonTitle" :productId="productId" />
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue'
import { ref, onMounted } from 'vue'

const props = defineProps({
  productId: String,
  actions: String,
  buttonTitle: String
})
const imagePath = ref(null)

onMounted(async () => {
  // Dynamic import for images
  try {
    const { default: imageSrc } = await import(`@/assets/${props.productId}.png`)
    imagePath.value = imageSrc

    // You might want to preload the image to ensure it's loaded
    const img = new Image()
    img.src = imagePath.value
  } catch (error) {
    console.error('Failed to import image:', error)
  }
})
</script>
