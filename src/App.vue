<template>
  <div class="ar">
    <component :is="layout">
      <RouterView />
    </component>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
const route = useRoute()

// to give each page 'layout'
const layout = computed(() => {
  return route.meta.layout || 'default-layout'
})
</script>

<style scoped></style>
