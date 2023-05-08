<template>
  <div class="auth-form">
    <div class="logo">
      <img src="@/assets/imgs/logo.svg" alt="logo" />
    </div>
    <div class="input">
      <label>إسم المستخدم أو البريد الإلكتروني <span>*</span></label>
      <input type="text" />
    </div>
    <div class="input password-input">
      <label> كلمة المرور <span>*</span></label>
      <div>
        <input type="text" />
        <IconEye color="#111" />
      </div>
    </div>
    <div class="links">
      <div>
        <input type="checkbox" id="remember" class="form-check-input" />
        <label for="remember">تذكرني</label>
      </div>
      <RouterLink to="/forget-password">هل نسيت كلمة المرور؟</RouterLink>
    </div>
    <button class="btn btn-primary submit">تسجيل دخول</button>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import IconEye from '@/components/icons/IconEye.vue'
</script>
<style scoped></style>
