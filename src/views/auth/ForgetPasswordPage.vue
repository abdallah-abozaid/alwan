<template>
  <div class="auth-form">
    <div class="logo">
      <img src="@/assets/imgs/logo.svg" alt="logo" />
    </div>
    <p class="title">هل نسيت كلمة المرور؟</p>
    <div class="input password-input">
      <label>البريد الإلكتروني <span>*</span></label>
      <div>
        <input type="text" />
        <IconMail color="#B1B1B1" />
      </div>
    </div>
    <div class="links">
      <span class="red">من فضلك، افحص الايميل</span>
      <p class="time">00:39</p>
    </div>
    <RouterLink to="/return-password" class="btn btn-primary submit mb-0">ارسال</RouterLink>
    <button class="retry m-0 btn">اعاده الاارسال</button>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import IconMail from '@/components/icons/IconMail.vue'
</script>
<style scoped></style>
