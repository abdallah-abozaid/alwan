<template>
  <div class="dropdown user">
    <button
      type="button"
      class="btn dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <img src="@/assets/imgs/user.png" alt="user" />
    </button>
    <form class="dropdown-menu p-4">
      <div class="mb-3">user 1</div>
      <div class="mb-3">user 1</div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
.user {
  position: relative;
}
.user .dropdown-toggle {
  border: none !important;
}
.user .dropdown-toggle::after {
  display: none;
}
.user .dropdown-toggle img {
  width: auto;
}
/* responsive for labtop screens */
@media (max-width: 1550px) {
  .user .dropdown-toggle img {
    width: 2.5rem;
  }
}
</style>
