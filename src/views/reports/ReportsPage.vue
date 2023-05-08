<template>
  <div>
    <DashboardHeader title="التقارير " />
    <PageLinks
      :RouteCount="2"
      :link1="{ route: '/dashboard', title: 'لوحه التحكم' }"
      :link2="{ route: '/reports', title: 'التقارير' }"
    />
    <div class="children-page">
      <div class="links">
        <ul>
          <li>
            <router-link to="/reports"> <IconUsers color="#747474" /> المستأجرين </router-link>
          </li>
          <li>
            <router-link to="/reports/angel">
              <IconOwner color="#747474" />
              الملاك
            </router-link>
          </li>
          <li>
            <router-link to="/reports/units">
              <IconUnits color="#747474" />
              العقارات والوحدات
            </router-link>
          </li>
          <li>
            <router-link to="/reports/contracts">
              <IconContracts color="#747474" />
              العقود</router-link
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
import IconUsers from '@/components/icons/IconUsers.vue'
import IconOwner from '@/components/icons/IconOwner.vue'
import IconUnits from '@/components/icons/IconUnits.vue'
import IconContracts from '@/components/icons/IconContracts.vue'
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
</style>
