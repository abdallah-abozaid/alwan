<template>
  <div class="dropdown user">
    <button
      type="button"
      class="btn dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <img src="@/assets/imgs/user.png" alt="user" />
    </button>
    <div class="dropdown-menu p-4">
      <div>الحالة : نشط</div>
      <div>
        <a href="/">إعدادات الحساب</a>
      </div>
      <div>
        <button>تسجيل خروج</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.user {
  position: relative;
}
.user .dropdown-toggle {
  border: none !important;
}
.user .dropdown-toggle::after {
  display: none;
}
.user .dropdown-toggle img {
  width: auto;
}
.user .dropdown-menu {
  min-width: 14rem;
  margin-top: 0.6rem !important;
  margin-left: -1rem !important;
  border: none;
  padding: 0 !important;
  text-align: right;
  box-shadow: 1px 1px 2px #e7e7e7, -1px -1px 2px #e7e7e7;
}

.user .dropdown-menu::after {
  content: '';
  position: absolute;
  top: -8px;
  left: 2.5rem;
  height: 15px;
  width: 15px;
  border-radius: 6px 0px 0px 0px;
  transform: rotate(45deg);
  background: #fff;
  box-shadow: 0px 0px 0px #e7e7e7, -1px -1px 2px #e7e7e7;
}
.user .dropdown-menu > div {
  text-align: center;
  margin: 0.7rem 1rem 0.3rem;
  padding: 0.3rem;
}
.user .dropdown-menu > div:not(:last-of-type) {
  border-bottom: 1px solid #f0f0f0;
}

.user .dropdown-menu > div a {
  display: block;
  width: 100%;
}
.user .dropdown-menu > div button {
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
}
/* responsive for labtop screens */
@media (max-width: 1550px) {
  .user .dropdown-toggle img {
    width: 2.5rem;
  }
  .user .dropdown-menu {
    min-width: 11rem;
    margin-top: 0.3rem !important;
  }

  .user .dropdown-menu::after {
    top: -5px;
    height: 11px;
    width: 11px;
  }
  .user .dropdown-menu > div {
    margin: 0.5rem 1rem 0.3rem;
    padding: 0.3rem;
    font-size: 0.8rem;
  }
}
/* responsive for ipad screens */
@media (max-width: 992px) {
  .user .dropdown-toggle img {
    width: 1.7rem;
  }
  .user .dropdown-menu {
    min-width: 10rem;
  }

  .user .dropdown-menu::after {
    left: 2.3rem;
  }
  .user .dropdown-menu > div {
    font-size: 0.75rem;
  }
}
</style>
