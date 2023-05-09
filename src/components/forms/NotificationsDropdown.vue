<template>
  <div class="dropdown notifications notRoad">
    <button
      type="button"
      class="btn dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <IconNotification color="#000" />
    </button>
    <div class="dropdown-menu p-4">
      <div class="all-notifications">
        <div class="single-notification">
          <img src="@/assets/imgs/user.png" alt="" />
          <div>
            <p class="name">محمد الاشقر</p>
            <p class="texts">هذا النص يمكن استبداله باي نص اخر</p>
          </div>
        </div>
        <div class="single-notification">
          <img src="@/assets/imgs/user.png" alt="" />
          <div>
            <p class="name">محمد الاشقر</p>
            <p class="texts">هذا النص يمكن استبداله باي نص اخر</p>
          </div>
        </div>
        <div class="single-notification">
          <img src="@/assets/imgs/user.png" alt="" />
          <div>
            <p class="name">محمد الاشقر</p>
            <p class="texts">هذا النص يمكن استبداله باي نص اخر</p>
          </div>
        </div>
        <div class="single-notification">
          <img src="@/assets/imgs/user.png" alt="" />
          <div>
            <p class="name">محمد الاشقر</p>
            <p class="texts">هذا النص يمكن استبداله باي نص اخر</p>
          </div>
        </div>
      </div>
      <a href="/" class="all-btn">جميع الإشعارات</a>
    </div>
  </div>
</template>

<script setup>
import IconNotification from '@/components/icons/IconNotification.vue'
</script>

<style scoped>
.notifications {
  margin-right: 1rem;
  position: relative;
}
.notifications .dropdown-toggle {
  border: none !important;
}
.notifications .dropdown-toggle::after {
  display: none;
}
.notifications .dropdown-menu {
  min-width: 19rem;
  margin-top: 0.6rem !important;
  margin-left: -2rem !important;
  border: none;
  padding: 0 !important;
  text-align: right;
  box-shadow: 1px 1px 2px #e7e7e7, -1px -1px 2px #e7e7e7;
}

.notifications .dropdown-menu::after {
  content: '';
  position: absolute;
  top: -8px;
  left: 2.75rem;
  height: 15px;
  width: 15px;
  border-radius: 6px 0px 0px 0px;
  transform: rotate(45deg);
  background: #fff;
  box-shadow: 0px 0px 0px #e7e7e7, -1px -1px 2px #e7e7e7;
}
.notifications .dropdown-menu .all-notifications {
  height: 20rem;
  overflow: auto;
}
.notifications .dropdown-menu .all-notifications .single-notification {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 1rem;
}
.notifications .dropdown-menu .all-notifications .single-notification:first-of-type {
  margin-top: 1rem;
}
.notifications .dropdown-menu .all-notifications .single-notification > img {
  width: 2rem;
  margin-left: 0.5rem;
}
.notifications .dropdown-menu .all-notifications .single-notification .name {
  font-size: 1rem;
  margin: 0;
  color: #000;
}
.notifications .dropdown-menu .all-notifications .single-notification .texts {
  font-size: 0.8rem;
  margin: 0;
  color: #98a9bc;
}
.notifications .dropdown-menu .all-btn {
  display: block;
  width: 100%;
  text-align: center;
  color: #4d7cfe;
  padding: 1rem;
  background-color: #f8fafb;
}
.notRoad::after {
  content: '';
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #ff0000;
  border-radius: 50%;
}

/* responsive for labtop screens */
@media (max-width: 1550px) {
  .notRoad::after {
    top: 0.25rem;
    left: 0.25rem;
    width: 0.4rem;
    height: 0.4rem;
  }
  .notifications .dropdown-toggle svg {
    width: 1.2rem;
    height: 1.2rem;
  }
  .notifications .dropdown-menu {
    min-width: 15rem;
    margin-top: 0.3rem !important;
    margin-left: -2rem !important;
  }

  .notifications .dropdown-menu::after {
    top: -5px;
    left: 3rem;
    height: 11px;
    width: 11px;
  }
  .notifications .dropdown-menu .all-notifications {
    height: 15rem;
  }
  .notifications .dropdown-menu .all-notifications .single-notification {
    padding: 0.4rem 0.7rem;
  }
  .notifications .dropdown-menu .all-notifications .single-notification:first-of-type {
    margin-top: 0.5rem;
  }
  .notifications .dropdown-menu .all-notifications .single-notification > img {
    width: 1.7rem;
  }
  .notifications .dropdown-menu .all-notifications .single-notification .name {
    font-size: 0.85rem;
  }
  .notifications .dropdown-menu .all-notifications .single-notification .texts {
    font-size: 0.65rem;
  }
  .notifications .dropdown-menu .all-btn {
    padding: 0.6rem;
    font-size: 0.8rem;
  }
}

/* responsive for ipad screens */
@media (max-width: 992px) {
  .notRoad::after {
    top: 0.2rem;
    left: 0.2rem;
    width: 0.35rem !important;
    height: 0.35rem !important;
  }
  .notifications .dropdown-toggle svg {
    width: 1rem;
    height: 1rem;
  }

  .notifications .dropdown-menu .all-notifications .single-notification > img {
    width: 1.5rem;
  }
  .notifications .dropdown-menu .all-notifications .single-notification .name {
    font-size: 0.8rem;
  }
  .notifications .dropdown-menu .all-notifications .single-notification .texts {
    font-size: 0.6rem;
  }
  .notifications .dropdown-menu .all-btn {
    font-size: 0.7rem;
  }
}
</style>
