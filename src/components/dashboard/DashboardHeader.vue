<template>
  <div class="dashboard-header">
    <p>{{ title }}</p>
    <div>
      <!-- theme -->
      <SwitchTheme2 />

      <!-- language -->
      <button class="lang">
        <span>EN</span>
        <IconGlobal />
      </button>

      <!-- notifications -->
      <NotificationsDropdown />

      <!-- user -->
      <UserDropdown />
    </div>
  </div>
</template>

<script>
import SwitchTheme2 from '../forms/SwitchTheme2.vue'
import NotificationsDropdown from '../forms/NotificationsDropdown.vue'
import UserDropdown from '../forms/UserDropdown.vue'
import IconGlobal from '../icons/IconGlobal.vue'

export default {
  name: 'dashboard-header',
  props: ['title'],
  components: { SwitchTheme2, IconGlobal, NotificationsDropdown, UserDropdown }
}
</script>

<style scoped>
.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.13rem solid #e7e7e7;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
}
.dashboard-header > p {
  font-size: 2rem;
  margin-bottom: 0;
  color: #000;
}
.dashboard-header > div {
  display: flex;
  align-items: center;
}
.dashboard-header > div > div:not(:last-of-type) {
  margin-left: 1.5rem;
}
.dashboard-header .lang {
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}
.dashboard-header .lang span {
  margin-left: 0.4rem;
}
.dashboard-header .lang svg {
  width: 1.2rem;
  height: 1.2rem;
}
/* responsive for labtop screens */
@media (max-width: 1550px) {
  .dashboard-header {
    border-bottom: 0.1rem solid #e7e7e7;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }
  .dashboard-header > p {
    font-size: 1.5rem;
  }

  .dashboard-header .lang {
    font-size: 1.1rem;
  }
  .dashboard-header .lang span {
    margin-left: 0.3rem;
  }
  .dashboard-header .lang svg {
    width: 1.1rem;
    height: 1.1rem;
  }
}

/* responsive for ipad screens */
@media (max-width: 992px) {
  .dashboard-header > p {
    font-size: 1.1rem;
  }

  .dashboard-header .lang {
    font-size: 0.95rem;
  }
  .dashboard-header .lang span {
    margin-left: 0.2rem;
  }
  .dashboard-header .lang svg {
    width: 0.9rem;
    height: 0.9rem;
  }
  .dashboard-header > div > div:not(:last-of-type) {
    margin-left: 1rem;
  }
}
</style>
