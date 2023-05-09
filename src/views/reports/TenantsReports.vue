<template>
  <div>
    <!-- alwan table -->
    <div class="alwan-table full-table m-0">
      <!-- header 1 -->
      <div class="head-1">
        <p class="m-0">تقرير المستأجرين</p>
        <div>
          <button>
            <IconExport color="#c4c4c4" />
          </button>
          <button type="button" data-bs-toggle="modal" data-bs-target="#tanantReportModal">
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
      <div class="table">
        <table>
          <tr class="thead">
            <th></th>
            <th>الإسم كاملاً</th>
            <th>عمود رقم 2</th>
            <th>المزيد</th>
          </tr>
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>محمد ماجد حسن الأشقر</td>
            <td class="note">111111</td>
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
                  <li><a class="dropdown-item" href="#">تنزيل</a></li>
                  <li><a class="dropdown-item" href="#">تعديل</a></li>
                  <li><a class="dropdown-item delete" href="#">حذف</a></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>محمد ماجد حسن الأشقر</td>
            <td class="note">111111</td>
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
                  <li><a class="dropdown-item" href="#">تنزيل</a></li>
                  <li><a class="dropdown-item" href="#">تعديل</a></li>
                  <li><a class="dropdown-item delete" href="#">حذف</a></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>محمد ماجد حسن الأشقر</td>
            <td class="note">111111</td>
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
                  <li><a class="dropdown-item" href="#">تنزيل</a></li>
                  <li><a class="dropdown-item" href="#">تعديل</a></li>
                  <li><a class="dropdown-item delete" href="#">حذف</a></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>محمد ماجد حسن الأشقر</td>
            <td class="note">111111</td>
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
                  <li><a class="dropdown-item" href="#">تنزيل</a></li>
                  <li><a class="dropdown-item" href="#">تعديل</a></li>
                  <li><a class="dropdown-item delete" href="#">حذف</a></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>محمد ماجد حسن الأشقر</td>
            <td class="note">111111</td>
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
                  <li><a class="dropdown-item" href="#">تنزيل</a></li>
                  <li><a class="dropdown-item" href="#">تعديل</a></li>
                  <li><a class="dropdown-item delete" href="#">حذف</a></li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
      </div>
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
