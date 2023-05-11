<template>
  <div>
    <div class="btns">
      <button :class="active == 1 ? 'active' : ''" @click="active = 1">السجلات</button>
      <button :class="active == 2 ? 'active' : ''" @click="active = 2">أجور الإدارة</button>
    </div>
    <!-- alwan table السجلات-->
    <div class="alwan-table full-table" v-if="active == 1">
      <!-- header 1 -->
      <div class="head-1">
        <p class="m-0">السجلات</p>
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
      <div class="table">
        <table>
          <tr class="thead">
            <th></th>
            <th>العنصر</th>
            <th>النوع</th>
            <th>تاريخ الدفعة</th>
            <th>تاريخ الدفعة</th>
            <th>م. المدفوع(ر.س)</th>
            <th>م. المتبقي (ر.س)</th>
            <th>الحالة</th>
            <th>الملاحظات</th>
          </tr>
          <!-- row -->
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>1</td>
            <td>أجور الإدارة</td>
            <td class="note">10-10-2022</td>
            <td class="note">10-10-2022</td>
            <td class="note">6000</td>
            <td>200</td>
            <td><IconDone color="#0f6" /></td>
            <td class="note">تم الدفع بالكامل</td>
          </tr>
          <!-- row -->
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>1</td>
            <td>أجور الإدارة</td>
            <td class="note">10-10-2022</td>
            <td class="note">10-10-2022</td>
            <td class="note">6000</td>
            <td>200</td>
            <td><IconDone color="#0f6" /></td>
            <td class="note">تم الدفع بالكامل</td>
          </tr>
          <!-- row -->
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>1</td>
            <td>أجور الإدارة</td>
            <td class="note">10-10-2022</td>
            <td class="note">10-10-2022</td>
            <td class="note">6000</td>
            <td>200</td>
            <td><IconDone color="#0f6" /></td>
            <td class="note">تم الدفع بالكامل</td>
          </tr>
          <!-- row -->
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>1</td>
            <td>أجور الإدارة</td>
            <td class="note">10-10-2022</td>
            <td class="note">10-10-2022</td>
            <td class="note">6000</td>
            <td>200</td>
            <td><IconDone color="#0f6" /></td>
            <td class="note">تم الدفع بالكامل</td>
          </tr>
          <!-- row -->
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>1</td>
            <td>أجور الإدارة</td>
            <td class="note">10-10-2022</td>
            <td class="note">10-10-2022</td>
            <td class="note">6000</td>
            <td>200</td>
            <td><IconDone color="#0f6" /></td>
            <td class="note">تم الدفع بالكامل</td>
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
    <!-- ******************************************************* -->
    <div class="alwan-table full-table" v-if="active == 2">
      <!-- header 1 -->
      <div class="head-1">
        <p class="m-0">أجور الإدارة</p>
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
      <div class="table">
        <table>
          <tr class="thead">
            <th></th>
            <th>العنصر</th>
            <th>ت. الإستحقاق</th>
            <th>م. الاستحقاق (ر.س)</th>
            <th>م. المدفوع(ر.س)</th>
            <th>م. المتبقي (ر.س)</th>
            <th>ت. الدفع</th>
            <th>ملاحظات</th>
            <th>الحالة</th>
          </tr>
          <!-- row -->
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>سعي المكتب</td>
            <td>10-10-2022</td>
            <td class="note">6000</td>
            <td class="note">6000</td>
            <td>
              <span class="btn-secondary px-5 py-1">0.00</span>
            </td>
            <td>10-8-2022</td>
            <td class="note">تم الدفع بالكامل</td>
            <td>
              <button class="btn btn-primary px-4">حفظ</button>
            </td>
          </tr>
          <!-- row -->
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>سعي المكتب</td>
            <td>10-10-2022</td>
            <td class="note">6000</td>
            <td class="note">6000</td>
            <td>
              <span class="btn-secondary px-5 py-1">0.00</span>
            </td>
            <td>10-8-2022</td>
            <td class="note">تم الدفع بالكامل</td>
            <td>
              <button class="btn btn-primary px-4">حفظ</button>
            </td>
          </tr>
          <!-- row -->
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>سعي المكتب</td>
            <td>10-10-2022</td>
            <td class="note">6000</td>
            <td class="note">6000</td>
            <td>
              <span class="btn-secondary px-5 py-1">0.00</span>
            </td>
            <td>10-8-2022</td>
            <td class="note">تم الدفع بالكامل</td>
            <td>
              <button class="btn btn-primary px-4">حفظ</button>
            </td>
          </tr>
          <!-- row -->
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>سعي المكتب</td>
            <td>10-10-2022</td>
            <td class="note">6000</td>
            <td class="note">6000</td>
            <td>
              <span class="btn-secondary px-5 py-1">0.00</span>
            </td>
            <td>10-8-2022</td>
            <td class="note">تم الدفع بالكامل</td>
            <td>
              <button class="btn btn-primary px-4">حفظ</button>
            </td>
          </tr>
          <!-- row -->
          <tr>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td>سعي المكتب</td>
            <td>10-10-2022</td>
            <td class="note">6000</td>
            <td class="note">6000</td>
            <td>
              <span class="btn-secondary px-5 py-1">0.00</span>
            </td>
            <td>10-8-2022</td>
            <td class="note">تم الدفع بالكامل</td>
            <td>
              <button class="btn btn-primary px-4">حفظ</button>
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

<script>
import IconPlus from '@/components/icons/IconPlus.vue'
import IconExport from '@/components/icons/IconExport.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconList from '@/components/icons/IconList.vue'
import IconAZ from '@/components/icons/IconAZ.vue'
import IconOrder1 from '@/components/icons/IconOrder1.vue'
import IconOrder2 from '@/components/icons/IconOrder2.vue'
import IconOrder3 from '@/components/icons/IconOrder3.vue'
import IconDoubleStep from '@/components/icons/IconDoubleStep.vue'
import IconArrow from '@/components/icons/IconArrow.vue'
import IconDone from '@/components/icons/IconDone.vue'
export default {
  components: {
    IconPlus,
    IconExport,
    IconSearch,
    IconList,
    IconAZ,
    IconOrder1,
    IconOrder2,
    IconOrder3,
    IconDoubleStep,
    IconArrow,
    IconDone
  },
  data() {
    return {
      active: 1
    }
  }
}
</script>

<style scoped>
.btns {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btns button {
  width: 40%;
  background-color: #fff;
  border: 2px solid #eeeeee;
  padding: 0.6rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  color: #747474;
  margin: 0 0.5rem;
}
.btns button.active {
  background-color: #0094f6;
  border-color: #0094f6;
  color: #fff;
}

/* responsive for labtop screens */
@media (max-width: 1550px) {
  .btns button {
    border: 1px solid #eeeeee;
    padding: 0.5rem;
    border-radius: 0.6rem;
    font-size: 1rem;
  }
}
/* responsive for labtop screens */
@media (max-width: 576px) {
 .btns button {
  width: 48%;
  padding: 0.4rem;
    font-size: .9rem;
  }
}
</style>
