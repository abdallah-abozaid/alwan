<template>
  <div class="page-links">
    <RouterLink :to="link1.route">{{ link1.title }}</RouterLink>
    <IconArrow color="#8b8b8b" v-if="link2" />
    <RouterLink :to="link2.route">{{ link2.title }}</RouterLink>
  </div>
</template>

<script>
import IconArrow from '../icons/IconArrow.vue'
import { RouterLink } from 'vue-router'
export default {
  props: ['link1', 'link2'],
  components: {
    IconArrow,
    RouterLink
  }
}
</script>

<style scoped>
.page-links {
  margin: 1rem 0 2rem;
}
.page-links a {
  font-size: 1.1rem;
  color: #6b7a99;
}
.page-links svg {
  margin: 0 0.6rem;
  width: 0.7rem;
  height: 0.7rem;
}
/* responsive for labtop screens */
@media (max-width: 1550px) {
  .page-links {
    margin: 1rem 0 1rem;
  }
  .page-links a {
    font-size: 0.95rem;
  }
  .page-links svg {
    margin: 0 0.4rem;
    width: 0.6rem;
    height: 0.6rem;
  }
}
</style>
