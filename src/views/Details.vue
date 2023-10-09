<template>
  <section class="py-5 flex-grow-1">
    <div class="container px-4 px-lg-5 mt-5">
      <div class="d-flex flex-wrap">
        <div class="card m-auto mt-sm-3" style="border: none">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="imagePath" class="card-img-top" :alt="productId" />
            </div>
            <div class="col-md-8 text-center">
              <div class="card-body">
                <h2
                  class="card-title text-uppercase"
                  v-bind:data-fsc-item-path="productId"
                  data-fsc-item-display
                ></h2>
                <p
                  class="card-text col-5 m-auto mb-3"
                  v-bind:data-fsc-item-path="productId"
                  data-fsc-item-description-summary
                ></p>
                <Button actions="Add,Checkout" title="Buy now" :productId="productId" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../components/Button.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = ref(route.params.productId)
const imagePath = ref(null)

onMounted(async () => {
  try {
    const { default: imageSrc } = await import(`@/assets/${productId.value}.jpg`)
    imagePath.value = imageSrc

    const img = new Image()
    img.src = imagePath.value
  } catch (error) {
    console.error('Failed to import image:', error)
  }
})
</script>
