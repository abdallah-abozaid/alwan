<template>
  <div class="dropdown notifications notRoad">
    <button
      type="button"
      class="btn dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <IconNotification color="#000" />
    </button>
    <form class="dropdown-menu p-4">
      <div class="mb-3">Notifications 1</div>
      <div class="mb-3">Notifications 1</div>
      <div class="mb-3">Notifications 1</div>
      <div class="mb-3">Notifications 1</div>
    </form>
  </div>
</template>

<script setup>
import IconNotification from '@/components/icons/IconNotification.vue'
</script>

<style scoped>
.notifications {
  margin-right: 1rem;
  position: relative;
}
.notifications .dropdown-toggle {
  border: none !important;
}
.notifications .dropdown-toggle::after {
  display: none;
}
.notRoad::after {
  content: '';
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #ff0000;
  border-radius: 50%;
}

/* responsive for labtop screens */
@media (max-width: 1550px) {
  .notRoad::after {
    top: 0.25rem;
    left: 0.25rem;
    width: 0.4rem;
    height: 0.4rem;
  }
  .notifications .dropdown-toggle svg {
    width: 1.2rem;
    height: 1.2rem;
  }
}
</style>
