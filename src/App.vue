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
    <NewContractsModal />
    <TanentReportModal />
    <AngelReportModal />
    <UnitsReportModal />
    <ContractsReportModal />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import NewTanantModal from '@/components/modals/NewTanantModal.vue'
import NewAngelModal from '@/components/modals/NewAngelModal.vue'
import NewUnitsModal from '@/components/modals/NewUnitsModal.vue'
import NewContractsModal from '@/components/modals/NewContractsModal.vue'
import TanentReportModal from '@/components/modals/TanentReportModal.vue'
import AngelReportModal from '@/components/modals/AngelReportModal.vue'
import UnitsReportModal from '@/components/modals/UnitsReportModal.vue'
import ContractsReportModal from '@/components/modals/ContractsReportModal.vue'
const route = useRoute()

// to give each page 'layout'
const layout = computed(() => {
  return route.meta.layout || 'default-layout'
})
</script>

<style scoped></style>
