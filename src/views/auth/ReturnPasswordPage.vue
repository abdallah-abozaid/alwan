<template>
  <div class="auth-form">
    <div class="logo">
      <img src="@/assets/imgs/logo.svg" alt="logo" />
    </div>
    <p class="title">استرجاع كلمة المرور</p>
    <div class="input password-input">
      <label>كلمة المرور الجديدة <span>*</span></label>
      <div>
        <input type="text" />
        <IconEye color="#B1B1B1" />
      </div>
    </div>
    <div class="input password-input">
      <label>تأكيد كلمة المرور <span>*</span></label>
      <div>
        <input type="text" />
        <IconEye color="#B1B1B1" />
      </div>
    </div>
    <div class="links">
      <p class="time">هل أنت متأكد ؟</p>
    </div>
    <RouterLink to="/dashboard" class="btn btn-primary submit mt-3">تأكيد</RouterLink>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import IconEye from '../../components/icons/IconEye.vue'
</script>
<style scoped></style>
