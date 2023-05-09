<template>
  <div class="dashboard-layout">
    <div class="sidebar">
      <div class="logo">
        <img src="@/assets/imgs/logo.svg" alt="logo" />
      </div>
      <div class="list">
        <RouterLink to="/dashboard">
          <span> <IconCombinedShap color="#646464" /> لوحة التحكم</span>
        </RouterLink>
        <RouterLink to="/tenants">
          <span> <IconUsers color="#646464" /> المستأجرين</span>
        </RouterLink>
        <RouterLink to="/angel">
          <span><IconOwner color="#646464" /> الملاك</span>
        </RouterLink>
        <RouterLink to="/units">
          <span> <IconUnits color="#646464" /> العقارات والوحدات</span>
        </RouterLink>
        <RouterLink to="/contracts">
          <span><IconContracts color="#646464" /> العقود</span>
        </RouterLink>
        <RouterLink to="/reports">
          <span><IconPaper color="#646464" /> التقارير</span>
        </RouterLink>
        <RouterLink to="/settings">
          <span><IconSetting color="#646464" /> الإعدادت</span>
        </RouterLink>
      </div>
      <div class="logout">
        <button>
          <IconLogout color="#646464" />
          تسجيل خروج
        </button>
      </div>
    </div>
    <div class="content">
      <div class="wrapper">
        <div class="pages"><slot /></div>
        <div class="footer">
          <p>جميع الحقوق محفوظة لشركة ألوان الينابيع 2023</p>
        </div>
        <IconCircle color="#0094f6" />
      </div>
    </div>
  </div>
</template>

<script>
import IconLogout from '../components/icons/IconLogout.vue'
import IconUsers from '../components/icons/IconUsers.vue'
import IconCombinedShap from '../components/icons/IconCombinedShap.vue'
import IconOwner from '../components/icons/IconOwner.vue'
import IconContracts from '../components/icons/IconContracts.vue'
import IconUnits from '../components/icons/IconUnits.vue'
import IconPaper from '../components/icons/IconPaper.vue'
import IconSetting from '../components/icons/IconSetting.vue'
import IconCircle from '../components/icons/IconCircle.vue'
import { RouterLink } from 'vue-router'
export default {
  name: 'DashboardLayout',
  components: {
    IconLogout,
    RouterLink,
    IconCombinedShap,
    IconUsers,
    IconOwner,
    IconUnits,
    IconContracts,
    IconPaper,
    IconSetting,
    IconCircle
  }
}
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  overflow: hidden;
}

/* sidebar style */
.dashboard-layout .sidebar {
  width: 15%;
  background-color: #efefef;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-right: 0.3rem;
}
.dashboard-layout .sidebar .logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22%;
  margin-bottom: 1rem;
}
.dashboard-layout .sidebar .logo img {
  width: 79px;
}
.dashboard-layout .sidebar .list {
  position: relative;
}
.dashboard-layout .sidebar .list a {
  display: block;
  margin-bottom: 0.8rem;
  position: relative;
}
.dashboard-layout .sidebar .list a span {
  display: block;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  position: relative;
}

.dashboard-layout .sidebar .list a.router-link-active::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  z-index: 2;
}

.dashboard-layout .sidebar .list a.router-link-active span {
  z-index: 3;
  position: relative;
  width: 100%;
  height: 100%;
}
.dashboard-layout .sidebar .list a.router-link-active span::after {
  content: '';
  position: absolute;
  top: -2.2rem;
  left: -0.5rem;
  width: 3rem;
  height: 3rem;
  background-image: url(../assets/imgs/cornre.svg);
  background-repeat: no-repeat;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  z-index: 2;
}
.dashboard-layout .sidebar .list a.router-link-active span::before {
  content: '';
  position: absolute;
  bottom: -2.5rem;
  left: -0.7rem;
  width: 3rem;
  height: 3rem;
  background-image: url(../assets/imgs/cornre.svg);
  background-repeat: no-repeat;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  z-index: 2;
  transform: rotate(90deg);
}
.dashboard-layout .sidebar .list a svg {
  margin-left: 0.5rem;
}
.dashboard-layout .sidebar .list::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 15%;
  width: 70%;
  height: 0.1rem;
  background-color: #d1d1d1;
}

.dashboard-layout .sidebar .logout {
  margin-top: auto;
  margin-bottom: 1rem;
  padding: 1rem;
}
.dashboard-layout .sidebar .logout button {
  border: none;
  background-color: transparent;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.dashboard-layout .sidebar .logout button svg {
  margin-left: 0.5rem;
}

/* content style */
.dashboard-layout .content {
  width: 85%;
  background-color: transparent;
  box-shadow: 3px 8px 10px #cecece;
  min-height: 100vh;
  overflow: auto;
  position: relative;
}
.dashboard-layout .content .wrapper {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding: 0rem 3rem 0 3rem;
  background-color: #fff;
}
.dashboard-layout .content .wrapper > svg {
  position: absolute;
  bottom: -10%;
  left: -7%;
  z-index: 1;
}
.dashboard-layout .content .pages {
  min-height: 93vh;
  background-color: #fff;
  z-index: 2;
  border-bottom: 1px solid #e0e0e0;
  border-bottom-left-radius: 1rem;
  padding: 1rem;
}
.dashboard-layout .content .footer {
  min-height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 0;
}
.dashboard-layout .content .footer p {
  margin-bottom: 0rem;
}
/* responsive for labtop screens */
@media (max-width: 1550px) {
  /* sidebar style */
  .dashboard-layout .sidebar {
    width: 18%;
    padding-right: 0.1rem;
  }

  .dashboard-layout .sidebar .logo img {
    width: 74px;
  }
  .dashboard-layout .sidebar .list a {
    margin-bottom: 0.3rem;
  }
  .dashboard-layout .sidebar .list a span {
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
  }

  .dashboard-layout .sidebar .list a svg {
    margin-left: 0.5rem;
  }
  .dashboard-layout .sidebar .logout button {
    font-size: 0.95rem;
  }
  .dashboard-layout .content {
    width: 82%;
  }
  .dashboard-layout .content .wrapper {
    padding: 0rem 2rem 0 2rem;
  }

  .dashboard-layout .content .wrapper > svg {
    bottom: -20%;
    left: -12%;
  }
  .dashboard-layout .content .pages {
    min-height: 94vh;
    padding: 0.5rem 1rem;
  }
  .dashboard-layout .content .footer {
    min-height: 6vh;
  }
  .dashboard-layout .content .footer p {
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
  }
}

/* responsive for ipad screens */
@media (max-width: 992px) {
  /* sidebar style */
  .dashboard-layout .sidebar {
    width: 22%;
  }

  .dashboard-layout .sidebar .logo img {
    width: 64px;
  }
  .dashboard-layout .sidebar .list a {
    margin-bottom: 0.2rem;
  }
  .dashboard-layout .sidebar .list a span {
    padding: 0.65rem 1rem;
    font-size: 0.8rem;
  }

  .dashboard-layout .sidebar .list a svg {
    margin-left: 0.4rem;
    width: 1rem;
  }
  .dashboard-layout .sidebar .logout button {
    font-size: 0.8rem;
  }
  .dashboard-layout .sidebar .logout button svg {
    width: 1rem;
  }
  .dashboard-layout .sidebar .list::after {
    height: 0.08rem;
  }
  .dashboard-layout .content {
    width: 78%;
  }
  .dashboard-layout .content .wrapper {
    padding: 0rem 1rem 0 1rem;
  }
  .dashboard-layout .content .wrapper > svg {
    bottom: -15%;
    left: -22%;
  }
  .dashboard-layout .content .pages {
    min-height: 95vh;
    padding: 0.5rem 1rem;
  }
  .dashboard-layout .content .footer {
    min-height: 5vh;
  }
  .dashboard-layout .content .footer p {
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
  }
}
/* responsive for phone screens */
@media (max-width: 576px) {
}
</style>
