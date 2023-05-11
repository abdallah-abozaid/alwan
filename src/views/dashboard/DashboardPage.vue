<template>
  <div class="dashboard-page">
    <DashboardHeader title="لوحة التحكم" />
    <!-- boxes elements -->
    <div class="boxes">
      <!-- box -->
      <div class="box">
        <div class="content">
          <div class="icon" style="background-color: #e0ecff">
            <IconUsers color="#4791FF" />
          </div>
          <div class="info">
            <p class="title">إجمالي المستأجرين</p>
            <p class="num">34</p>
          </div>
        </div>
        <div class="percentage" style="color: #4791ff">+ 25%</div>
      </div>
      <!-- box -->
      <div class="box">
        <div class="content">
          <div class="icon" style="background-color: #d4f4e8">
            <IconOwner color="#02BC77" />
          </div>
          <div class="info">
            <p class="title">إجمالي الملاك</p>
            <p class="num">7</p>
          </div>
        </div>
        <div class="percentage" style="color: #02bc77">+ 20%</div>
      </div>
      <!-- box -->
      <div class="box">
        <div class="content">
          <div class="icon" style="background-color: #ffdae5">
            <IconUnits color="#FF2366" />
          </div>
          <div class="info">
            <p class="title">إجمالي الوحدات</p>
            <p class="num">5</p>
          </div>
        </div>
        <div class="percentage" style="color: #ff2366">+ 10%</div>
      </div>
      <!-- box -->
      <div class="box">
        <div class="content">
          <div class="icon" style="background-color: #fff9e1">
            <IconContracts color="#FFD950" />
          </div>
          <div class="info">
            <p class="title">إجمالي العقود</p>
            <p class="num">14</p>
          </div>
        </div>
        <div class="percentage" style="color: #ffd950">+ 10%</div>
      </div>
    </div>

    <!--statistics elements -->
    <div class="statistics">
      <p class="title">الإحصائيات</p>
      <div class="cards row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">قيمة الإيجارات</h5>
              <div>
                <div class="chart">
                  <img src="@/assets/imgs/chart.png" alt="chart" />
                </div>
                <ul class="list">
                  <li>
                    <span style="background-color: #800000"></span>
                    مجموع الإيجارات 00 ريال سعودي
                  </li>
                  <li>
                    <span style="background-color: #50ffff"></span>
                    الإيجارات المدفوعة 00ريال سعودي
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">الوحدات</h5>
              <div>
                <div class="chart">
                  <img src="@/assets/imgs/chart.png" alt="chart" />
                </div>
                <ul class="list">
                  <li>
                    <span style="background-color: #4791ff"></span>
                    الوحدات الشاغرة 122
                  </li>
                  <li>
                    <span style="background-color: #4791ff"></span>
                    الوحدات المستأجرة 244
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">الدخل</h5>
              <div>
                <div class="chart">
                  <img src="@/assets/imgs/chart.png" alt="chart" />
                </div>
                <ul class="list">
                  <li>
                    <span style="background-color: #efefef"></span>
                    أجور الإدارة 1111ريال سعودي
                  </li>
                  <li>
                    <span style="background-color: #808080"></span>
                    سعي المكتب 222 ريال سعودي
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">حالة العقد</h5>
              <div>
                <div class="chart">
                  <img src="@/assets/imgs/chart.png" alt="chart" />
                </div>
                <ul class="list">
                  <li>
                    <span style="background-color: #2699fb"></span>
                    نشط 313
                  </li>
                  <li>
                    <span style="background-color: #00ff2b"></span>
                    غير نشط 0
                  </li>
                  <li>
                    <span style="background-color: #008000"></span>
                    معلق 24
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown add-btn btn-group dropstart">
        <button
          type="button"
          class="btn dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          <IconPlus color="#3361ff" />
        </button>
        <div class="dropdown-menu p-4">
          <div>
            <a href="/">تعديل</a>
          </div>
          <div>
            <button>حذف</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import IconUsers from '@/components/icons/IconUsers.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconOwner from '@/components/icons/IconOwner.vue'
import IconUnits from '@/components/icons/IconUnits.vue'
import IconContracts from '@/components/icons/IconContracts.vue'
</script>
<style scoped>
/* boxes */
.dashboard-page .boxes {
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dashboard-page .boxes .box {
  width: 23%;
  background-color: #fff;
  box-shadow: -2px 5px 8px #ececec, 1px 5px 5px #ececec;
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dashboard-page .boxes .box .content {
  display: flex;
  align-items: stretch;
}
.dashboard-page .boxes .box .content .icon {
  width: 3.5rem;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
}
.dashboard-page .boxes .box .content .icon svg {
  width: 2.5rem;
  height: 2.5rem;
}
.dashboard-page .boxes .box .content .info .title {
  margin: 0rem;
}
.dashboard-page .boxes .box .content .info .num {
  margin: 0rem;
  font-size: 2rem;
  color: #000;
  line-height: 2.5rem;
}
.dashboard-page .boxes .box .percentage {
  font-size: 1rem;
}

/* statistics */
.dashboard-page .statistics .title {
  font-size: 2rem;
  margin-bottom: 1.6rem;
}

.dashboard-page .statistics .cards {
  align-items: stretch;
}
.dashboard-page .statistics .cards .card {
  border: none;
  height: 100%;
  border-radius: 0.7rem;
  box-shadow: 2px 6px 8px #f0f0f0, -2px -6px 8px #f0f0f0;
}
.dashboard-page .statistics .cards .card .card-title {
  text-align: center;
  margin: 1rem 0 2rem;
}
.dashboard-page .statistics .cards .card .chart {
  text-align: center;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #cee8fe;
  width: 80%;
  margin: 0 auto 2rem;
}

.dashboard-page .statistics .cards .card .list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.dashboard-page .statistics .cards .card .list li {
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
}
.dashboard-page .statistics .cards .card .list li:last-of-type {
  margin: 0;
}
.dashboard-page .statistics .cards .card .list li > span {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-left: 0.6rem;
  border-radius: 50%;
}
.dashboard-page .statistics .add-btn {
  margin: 2rem 50% 1rem;
  transform: translateX(50%);
}
.dashboard-page .statistics .add-btn button {
  background-color: transparent;
  border: none;
}
.dashboard-page .statistics .add-btn button svg {
  width: 3rem;
  height: 3rem;
}
.dashboard-page .statistics .add-btn .dropdown-toggle::before {
  display: none !important;
}

.dashboard-page .statistics .add-btn .dropdown-menu {
  min-width: 14rem;
  margin-top: 0.6rem !important;
  margin-left: -1rem !important;
  border: none;
  padding: 0 !important;
  text-align: right;
  background-color: #fff;
  z-index: 31;
  box-shadow: 1px 1px 2px #e7e7e7, -1px -1px 2px #e7e7e7;
}

.dashboard-page .statistics .add-btn .dropdown-menu::after {
  content: '';
  position: absolute;
  top: 11px;
  right: -0.5rem;
  height: 15px;
  width: 15px;
  border-radius: 6px 0px 0px 0px;
  transform: rotate(145deg);
  background: #fff;
  box-shadow: 0px 0px 0px #e7e7e7, -1px -1px 2px #e7e7e7;
}
.dashboard-page .statistics .add-btn .dropdown-menu > div {
  text-align: center;
  margin: 0.7rem 1rem 0.3rem;
  padding: 0.3rem;
}
.dashboard-page .statistics .add-btn .dropdown-menu > div:not(:last-of-type) {
  border-bottom: 1px solid #eeeeee;
}

.dashboard-page .statistics .add-btn .dropdown-menu > div a {
  display: block;
  width: 100%;
}
.dashboard-page .statistics .add-btn .dropdown-menu > div button {
  display: block;
  width: 100%;
  border: none;
  color: #ff0000;
  background-color: transparent;
}
/* responsive for labtop screens */
@media (max-width: 1550px) {
  .dashboard-page .boxes {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
  .dashboard-page .boxes .box {
    width: 24%;
    box-shadow: -2px 3px 6px #ececec, 1px 3px 5px #ececec;
    border-radius: 0.4rem;
    padding: 1.2rem 1rem;
  }

  .dashboard-page .boxes .box .content .icon {
    width: 2.7rem;
    border-radius: 0.5rem;
    margin-left: 0.7rem;
  }
  .dashboard-page .boxes .box .content .icon svg {
    width: 1.8rem;
    height: 1.8rem;
  }
  .dashboard-page .boxes .box .content .info .title {
    font-size: 0.85rem;
  }
  .dashboard-page .boxes .box .content .info .num {
    font-size: 1.7rem;
    line-height: 2rem;
  }
  .dashboard-page .boxes .box .percentage {
    font-size: 0.9rem;
  }

  /* statistics */
  .dashboard-page .statistics .title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .dashboard-page .statistics .cards .card {
    border-radius: 0.5rem;
    box-shadow: 2px 4px 5px #f0f0f0, -2px -4px 5px #f0f0f0;
  }
  .dashboard-page .statistics .cards .card .card-title {
    font-size: 1rem;
    margin: 0.5rem 0 1rem;
  }
  .dashboard-page .statistics .cards .card .chart {
    padding-bottom: 1rem;
    border-bottom: 1px solid #cee8fe;
    margin: 0 auto 1rem;
  }
  .dashboard-page .statistics .cards .card .chart img {
    width: 60%;
  }

  .dashboard-page .statistics .cards .card .list li {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
  .dashboard-page .statistics .cards .card .list li:last-of-type {
    margin: 0;
  }
  .dashboard-page .statistics .cards .card .list li > span {
    width: 0.8rem;
    height: 0.8rem;
    margin-left: 0.4rem;
  }
  .dashboard-page .statistics .add-btn {
    margin: 0.6rem 50% 0rem;
  }

  .dashboard-page .statistics .add-btn button svg {
    width: 2.1rem;
    height: 2.1rem;
  }

  .dashboard-page .statistics .add-btn .dropdown-menu {
    min-width: 11rem;
    margin-top: 0.6rem !important;
    margin-left: -1rem !important;
  }

  .dashboard-page .statistics .add-btn .dropdown-menu::after {
    right: -0.3rem;
    height: 11px;
    width: 11px;
  }
  .dashboard-page .statistics .add-btn .dropdown-menu > div {
    margin: 0.5rem 1rem 0.1rem;
    padding: 0.2rem;
    font-size: 0.8rem;
  }
}
/* responsive for ipad screens */
@media (max-width: 992px) {
  .dashboard-page .boxes {
    flex-wrap: wrap;
  }
  .dashboard-page .boxes .box {
    width: 48%;
    margin-bottom: 1rem;
  }

  .dashboard-page .boxes .box .content .icon {
    width: 2.4rem;
    border-radius: 0.4rem;
    margin-left: 0.4rem;
  }
  .dashboard-page .boxes .box .content .icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  .dashboard-page .boxes .box .content .info .title {
    font-size: 0.78rem;
  }
  .dashboard-page .boxes .box .content .info .num {
    font-size: 1.7rem;
  }
  .dashboard-page .boxes .box .percentage {
    font-size: 0.8rem;
  }

  /* statistics */
  .dashboard-page .statistics .title {
    font-size: 1.1rem;
  }

  .dashboard-page .statistics .cards .card .card-title {
    font-size: 0.9rem;
  }
  .dashboard-page .statistics .cards .card .chart img {
    width: 50%;
  }

  .dashboard-page .statistics .cards .card .list li {
    font-size: 0.75rem;
  }

  .dashboard-page .statistics .cards .card .list li > span {
    width: 0.7rem;
    height: 0.7rem;
  }

  .dashboard-page .statistics .add-btn button svg {
    width: 2rem;
    height: 2rem;
  }
}
/* responsive for phone screens */
@media (max-width: 576px) {
  .dashboard-page .boxes .box {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
