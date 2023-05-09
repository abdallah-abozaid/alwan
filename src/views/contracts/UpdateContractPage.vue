<template>
  <div>
    <DashboardHeader title="تحديث العقود " />
    <PageLinks
      :RouteCount="3"
      :link1="{ route: '/dashboard', title: 'لوحه التحكم' }"
      :link2="{ route: '/contracts', title: 'العقود' }"
      :link3="{ route: '/contracts/1', title: 'تحديث العقد' }"
    />
    <div class="children-page">
      <div class="links">
        <ul>
          <li>
            <router-link to="/contracts/1"> <IconsPayments color="#747474" /> الدفعات </router-link>
          </li>
          <li>
            <router-link to="/contracts/1/expenses">
              <IconExpenses color="#747474" />
              المصروفات
            </router-link>
          </li>
          <li>
            <router-link to="/contracts/1/administration-wages">
              <IconWages color="#747474" />
              أجور الإدارة
            </router-link>
          </li>
          <li>
            <router-link to="/contracts/1/owners-entitlements">
              <IconDues color="#747474" />
              استحقاقات المالك</router-link
            >
          </li>
          <li>
            <router-link to="/contracts/1/statment-of-account">
              <IconAccountStatment color="#747474" />
              كشف حساب</router-link
            >
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import PageLinks from '@/components/forms/PageLinks.vue'
import IconsPayments from '@/components/icons/IconsPayments.vue'
import IconExpenses from '@/components/icons/IconExpenses.vue'
import IconWages from '@/components/icons/IconWages.vue'
import IconDues from '@/components/icons/IconDues.vue'
import IconAccountStatment from '@/components/icons/IconAccountStatment.vue'
</script>
<style scoped>
.children-page {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}
.children-page .links {
  width: 15%;
}
.children-page .content {
  width: 85%;
  padding-right: 2rem;
}
.children-page .links ul {
  margin: 0;
  padding: 0;
  list-style: none;
  min-height: 50vh;
  border-left: 1px solid #f7f3f3;
}
.children-page .links ul li {
  border-bottom: 1px solid #f7f3f3;
}
.children-page .links ul li a {
  padding: 0.8rem;
  display: flex;
  align-items: center;
  position: relative;
}
.children-page .links ul li a svg {
  margin-left: 1rem;
}
.children-page .links ul li a.router-link-exact-active {
  background-color: #f8fafb;
}

.children-page .links ul li a.router-link-exact-active::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0.2rem;
  height: 100%;
  background-color: #0094f6;
}

/* responsive for labtop screens */
@media (max-width: 1550px) {
  .children-page .links {
    width: 20%;
  }
  .children-page .content {
    width: 80%;
    padding-right: 1rem;
  }

  .children-page .links ul li a {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
  .children-page .links ul li a svg {
    margin-left: 0.6rem;
  }

  .children-page .links ul li a.router-link-exact-active::after {
    width: 0.15rem;
  }
}
/* responsive for ipad screens */
@media (max-width: 992px) {
  .children-page {
    display: block;
  }
  .children-page .links {
    width: 100%;
  }
  .children-page .content {
    width: 100%;
    padding-right: 0rem;
  }
  .children-page .links ul {
    min-height: unset;
    border-left: none;
    margin-bottom: 2rem;
  }

  .children-page .links ul li a {
    padding: 0.7rem;
    font-size: 0.8rem;
  }
  .children-page .links ul li a svg {
    margin-left: 0.5rem;
    width: 1.1rem;
  }

  .children-page .links ul li a.router-link-exact-active::after {
    width: 0.15rem;
  }
}
</style>
