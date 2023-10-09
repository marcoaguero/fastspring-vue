<template>
  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    <div class="text-center">
      <a
        class="btn btn-outline-dark mt-auto"
        :href="link"
        :data-fsc-item-path-value="productId"
        :data-fsc-action="actions"
      >
        {{ title }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  link: String,
  productId: String,
  actions: String,
  title: String
})
</script>
