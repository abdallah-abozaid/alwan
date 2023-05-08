<template>
  <div class="auth-layout">
    <IconCircle color="#0094f6" />
    <IconCircle color="#0094f6" />
    <div class="header">
      <button class="lang">
        <span>EN</span>
        <IconGlobal />
      </button>
    </div>
    <slot />
  </div>
</template>

<script>
import IconCircle from '../components/icons/IconCircle.vue'
import IconGlobal from '../components/icons/IconGlobal.vue'

export default {
  name: 'AuthLayout',
  components: {
    IconCircle,
    IconGlobal
  }
}
</script>

<style scoped>
.auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}
.auth-layout > svg:first-of-type {
  position: absolute;
  top: -10%;
  right: -5%;
}
.auth-layout > svg:last-of-type {
  position: absolute;
  bottom: -10%;
  left: -5%;
}
.auth-layout .header {
  position: absolute;
  top: 4rem;
  left: 3rem;
  width: auto;
  display: flex;
  justify-content: flex-end;
}
.auth-layout .header button {
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}
.auth-layout .header button svg {
  margin-right: 0.5rem;
  width: 1.4rem;
  height: 1.4rem;
}
@media (max-width: 1550px) {
  .auth-layout > svg:first-of-type {
    top: -18%;
    right: -8%;
  }
  .auth-layout > svg:last-of-type {
    bottom: -18%;
    left: -8%;
  }
  .auth-layout .header {
    top: 3rem;
    left: 2rem;
  }
  .auth-layout .header button {
    font-size: 1rem;
  }
  .auth-layout .header button svg {
    margin-right: 0.4rem;
    width: 1.1rem;
    height: 1.1rem;
  }
}
</style>
