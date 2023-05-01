<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute()

// to give each page 'layout'
const layout = computed(() => {
  return route.meta.layout || 'default-layout'
})
</script>

<style scoped></style>
