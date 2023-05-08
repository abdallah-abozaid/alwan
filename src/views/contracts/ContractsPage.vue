<template>
  <div>
    <DashboardHeader title="العقود" />
    <PageLinks
      :RouteCount="2"
      :link1="{ route: '/dashboard', title: 'لوحه التحكم' }"
      :link2="{ route: '/contracts', title: 'العقود' }"
    />

    <!-- alwan table -->
    <div class="alwan-table big-table">
      <!-- header 1 -->
      <div class="head-1">
        <p class="m-0">العقود</p>
        <div>
          <button>
            <IconExport color="#c4c4c4" />
          </button>
          <button type="button" data-bs-toggle="modal" data-bs-target="#contractsModal">
            <IconPlus color="#3361FF" />
          </button>
        </div>
      </div>

      <!-- header 2 -->
      <div class="head-2">
        <div class="sort">
          <button>
            <IconList color="#778ca2" />
            <span>ترتيب :</span>
            <IconAZ color="#778ca2" />
          </button>
        </div>
        <div class="search">
          <div>
            <input type="text" placeholder="بحث" />
            <IconSearch color="#c3cad9" />
          </div>
        </div>
        <div class="order">
          <button>
            <IconOrder1 color="#d1d1d1" />
          </button>
          <button>
            <IconOrder2 color="#c4c4c4" />
          </button>
          <button class="active">
            <IconOrder3 color="rgba(51,97,255,0.8)" />
          </button>
        </div>
      </div>

      <!-- table -->
      <table>
        <tr class="thead">
          <th></th>
          <th>إسم العقار</th>
          <th>رقم الوحدة</th>
          <th>رقم العقد</th>
          <th>تاريخ بداية العقد</th>
          <th>تاريخ نهاية العقد</th>
          <th>حالة العقد</th>
          <th>إستمراية العقد</th>
          <th>المزيد</th>
        </tr>
        <!-- row -->
        <tr>
          <td>
            <input type="checkbox" class="form-check-input" />
          </td>
          <td>عمارة البر</td>
          <td>8</td>
          <td>8</td>
          <td class="note">2-5-2022</td>
          <td class="note">10-8-2022</td>
          <td class="link">
            <RouterLink to="/contracts/1"
              >تحديث
              <IconArrow color="#fff" />
            </RouterLink>
          </td>
          <td class="link">
            <a href="/"
              >منتهي
              <IconArrow color="#fff" />
            </a>
          </td>
          <td>
            <div class="dropdown more">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownlist"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <IconThreeDotes />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownlist">
                <li><a class="dropdown-item" href="#">تعديل</a></li>
                <li><a class="dropdown-item delete" href="#">حذف</a></li>
              </ul>
            </div>
          </td>
        </tr>
        <!-- row -->
        <tr>
          <td>
            <input type="checkbox" class="form-check-input" />
          </td>
          <td>عمارة البر</td>
          <td>8</td>
          <td>8</td>
          <td class="note">2-5-2022</td>
          <td class="note">10-8-2022</td>
          <td class="link">
            <RouterLink to="/contracts/1"
              >تحديث
              <IconArrow color="#fff" />
            </RouterLink>
          </td>
          <td class="link">
            <a href="/"
              >منتهي
              <IconArrow color="#fff" />
            </a>
          </td>
          <td>
            <div class="dropdown more">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownlist"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <IconThreeDotes />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownlist">
                <li><a class="dropdown-item" href="#">تعديل</a></li>
                <li><a class="dropdown-item delete" href="#">حذف</a></li>
              </ul>
            </div>
          </td>
        </tr>
        <!-- row -->
        <tr>
          <td>
            <input type="checkbox" class="form-check-input" />
          </td>
          <td>عمارة البر</td>
          <td>8</td>
          <td>8</td>
          <td class="note">2-5-2022</td>
          <td class="note">10-8-2022</td>
          <td class="link">
            <RouterLink to="/contracts/1"
              >تحديث
              <IconArrow color="#fff" />
            </RouterLink>
          </td>
          <td class="link">
            <a href="/"
              >منتهي
              <IconArrow color="#fff" />
            </a>
          </td>
          <td>
            <div class="dropdown more">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownlist"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <IconThreeDotes />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownlist">
                <li><a class="dropdown-item" href="#">تعديل</a></li>
                <li><a class="dropdown-item delete" href="#">حذف</a></li>
              </ul>
            </div>
          </td>
        </tr>
        <!-- row -->
        <tr>
          <td>
            <input type="checkbox" class="form-check-input" />
          </td>
          <td>عمارة البر</td>
          <td>8</td>
          <td>8</td>
          <td class="note">2-5-2022</td>
          <td class="note">10-8-2022</td>
          <td class="link">
            <RouterLink to="/contracts/1"
              >تحديث
              <IconArrow color="#fff" />
            </RouterLink>
          </td>
          <td class="link">
            <a href="/"
              >منتهي
              <IconArrow color="#fff" />
            </a>
          </td>
          <td>
            <div class="dropdown more">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownlist"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <IconThreeDotes />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownlist">
                <li><a class="dropdown-item" href="#">تعديل</a></li>
                <li><a class="dropdown-item delete" href="#">حذف</a></li>
              </ul>
            </div>
          </td>
        </tr>
        <!-- row -->
        <tr>
          <td>
            <input type="checkbox" class="form-check-input" />
          </td>
          <td>عمارة البر</td>
          <td>8</td>
          <td>8</td>
          <td class="note">2-5-2022</td>
          <td class="note">10-8-2022</td>
          <td class="link">
            <RouterLink to="/contracts/1"
              >تحديث
              <IconArrow color="#fff" />
            </RouterLink>
          </td>
          <td class="link">
            <a href="/"
              >منتهي
              <IconArrow color="#fff" />
            </a>
          </td>
          <td>
            <div class="dropdown more">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownlist"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <IconThreeDotes />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownlist">
                <li><a class="dropdown-item" href="#">تعديل</a></li>
                <li><a class="dropdown-item delete" href="#">حذف</a></li>
              </ul>
            </div>
          </td>
        </tr>
        <!-- row -->
        <tr>
          <td>
            <input type="checkbox" class="form-check-input" />
          </td>
          <td>عمارة البر</td>
          <td>8</td>
          <td>8</td>
          <td class="note">2-5-2022</td>
          <td class="note">10-8-2022</td>
          <td class="link">
            <a href="/"
              >تحديث
              <IconArrow color="#fff" />
            </a>
          </td>
          <td class="link">
            <a href="/"
              >منتهي
              <IconArrow color="#fff" />
            </a>
          </td>
          <td>
            <div class="dropdown more">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownlist"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <IconThreeDotes />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownlist">
                <li><a class="dropdown-item" href="#">تعديل</a></li>
                <li><a class="dropdown-item delete" href="#">حذف</a></li>
              </ul>
            </div>
          </td>
        </tr>
      </table>

      <!-- pagination -->
      <div class="pagination">
        <div class="steps">
          <button><IconDoubleStep /></button>
          <span>1</span>
          <button><IconDoubleStep /></button>
        </div>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            1
            <div class="icons">
              <IconArrow color="#0094f6" />
              <IconArrow color="#0094f6" />
            </div>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">1</a></li>
            <li><a class="dropdown-item" href="#">2</a></li>
            <li><a class="dropdown-item" href="#">3</a></li>
            <li><a class="dropdown-item" href="#">4</a></li>
            <li><a class="dropdown-item" href="#">5</a></li>
            <li><a class="dropdown-item" href="#">6</a></li>
            <li><a class="dropdown-item" href="#">7</a></li>
            <li><a class="dropdown-item" href="#">8</a></li>
            <li><a class="dropdown-item" href="#">9</a></li>
            <li><a class="dropdown-item" href="#">10</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import PageLinks from '@/components/forms/PageLinks.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconExport from '@/components/icons/IconExport.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconList from '@/components/icons/IconList.vue'
import IconAZ from '@/components/icons/IconAZ.vue'
import IconOrder1 from '@/components/icons/IconOrder1.vue'
import IconOrder2 from '@/components/icons/IconOrder2.vue'
import IconOrder3 from '@/components/icons/IconOrder3.vue'
import IconThreeDotes from '@/components/icons/IconThreeDotes.vue'
import IconDoubleStep from '@/components/icons/IconDoubleStep.vue'
import IconArrow from '@/components/icons/IconArrow.vue'
</script>
<style scoped></style>
