<template>
  <div>
    <DashboardHeader title="الإعدادت" />
    <PageLinks
      :RouteCount="2"
      :link1="{ route: '/dashboard', title: 'لوحه التحكم' }"
      :link2="{ route: '/settings', title: 'الإعدادت' }"
    />

    <div class="setting-page">
      <p class="title">البيانات الشخصية</p>
      <div class="personal-info">
        <div class="group">
          <div class="input">
            <label>الإسم كاملاً</label>
            <input type="text" />
          </div>
          <div class="input">
            <label>البريد الإلكتروني</label>
            <input type="text" />
          </div>
        </div>
        <div class="input">
          <label>رقم الجوال</label>
          <input type="text" />
        </div>
      </div>
      <p class="title">كلمة المرور</p>
      <div class="password">
        <div class="input password-input">
          <label>كلمة المرور </label>
          <div>
            <input type="text" />
            <IconEye color="#111" />
          </div>
        </div>
        <div class="group">
          <div class="input password-input">
            <label>كلمة المرور الجديدة </label>
            <div>
              <input type="text" />
              <IconEye color="#111" />
            </div>
          </div>
          <div class="input password-input">
            <label>تأكيد كلمة المرور الجديدة </label>
            <div>
              <input type="text" />
              <IconEye color="#111" />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-4">
        <button class="btn-secondary btn px-5 mx-2">إلغاء</button>
        <button class="btn btn-primary px-5">إضافة</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import PageLinks from '@/components/forms/PageLinks.vue'
import IconEye from '@/components/icons/IconEye.vue'
</script>
<style scoped>
.setting-page .title {
  font-size: 1.3rem;
  color: #0094f6;
  margin-top: 3rem;
}
.setting-page > div {
  padding-right: 3rem;
}
.setting-page .group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.setting-page .group .input {
  width: 48%;
}
.setting-page .group .input:first-of-type {
  margin-left: 4%;
}

/* responsive for labtop screens */
@media (max-width: 1550px) {
  .setting-page .title {
    font-size: 1.1rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .setting-page > div {
    padding-right: 2rem;
  }
}
</style>
