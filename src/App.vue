<template>
  <div class="ar">
    <!-- element layouts -->
    <component :is="layout">
      <RouterView />
    </component>

    <!-- -------- modals ------- -->
    <NewTanantModal />
    <NewAngelModal />
    <NewUnitsModal />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import NewTanantModal from '@/components/modals/NewTanantModal.vue'
import NewAngelModal from '@/components/modals/NewAngelModal.vue'
import NewUnitsModal from '@/components/modals/NewUnitsModal.vue'
const route = useRoute()

// to give each page 'layout'
const layout = computed(() => {
  return route.meta.layout || 'default-layout'
})
</script>

<style scoped></style>
