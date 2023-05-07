<template>
  <div
    class="modal fade"
    id="contractsModal"
    tabindex="-1"
    aria-labelledby="contractsModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered big-modal two-modal">
      <div class="modal-content">
        <!-- first modal -->
        <div class="first-modal">
          <div class="modal-header">
            <h5 class="modal-title" id="contractsModalLabel">بيانات العقد</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="input">
              <label>إسم العقار <span>(*)</span></label>
              <input type="text" />
            </div>
            <div class="input">
              <label>إسم المستأجر <span>(*)</span></label>
              <input type="text" />
            </div>
            <div class="input">
              <label> عدد الوحدات المراد تأجيرها<span></span></label>
              <div class="number-input">
                <IconArrow
                  color="#0094f6"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                />
                <IconArrow
                  color="#0094f6"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                />
                <input type="number" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input">
                  <label> رقم العقد<span></span></label>
                  <div class="number-input">
                    <IconArrow
                      color="#0094f6"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    />
                    <IconArrow
                      color="#0094f6"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                    />
                    <input type="number" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input">
                  <label> مدة العقد<span></span></label>
                  <div class="number-input">
                    <IconArrow
                      color="#0094f6"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    />
                    <IconArrow
                      color="#0094f6"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                    />
                    <input type="number" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input">
                  <label> تاريخ بداية العقد<span></span></label>
                  <div class="date-input">
                    <input type="text" />
                    <IconCalender color="#3361FF" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input">
                  <label> تاريخ نهاية العقد<span></span></label>
                  <div class="date-input">
                    <input type="text" />
                    <IconCalender color="#3361FF" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- second modal -->
        <div class="sec-modal">
          <div class="modal-header">
            <h5 class="modal-title" id="contractsModalLabel">مالك جديد</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <div class="input">
                  <label>عدد الدفعات <span>(*)</span></label>
                  <div class="number-input">
                    <IconArrow
                      color="#0094f6"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    />
                    <IconArrow
                      color="#0094f6"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                    />
                    <input type="number" />
                  </div>
                </div>
                <div class="input">
                  <label>رسوم الماء <span>(*)</span></label>
                  <input type="text" />
                </div>
                <div class="input">
                  <label> رسوم أخرى <span></span></label>
                  <input type="text" />
                </div>
                <div class="input">
                  <label> سعي المكتب <span></span></label>
                  <input type="text" />
                </div>
                <div class="input">
                  <label> إدارة الأملاك (ثابتة) <span></span></label>
                  <input type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input">
                  <label>قيمة الإيجار <span>(*)</span></label>
                  <input type="text" />
                </div>
                <div class="input">
                  <label>رسوم الكهرباء <span>(*)</span></label>
                  <input type="text" />
                </div>
                <div class="input">
                  <label> مجموع الإيجار<span></span></label>
                  <input type="text" />
                </div>
                <div class="input">
                  <label> إدارة الأملاك (نسبة)<span></span></label>
                  <input type="text" />
                </div>
                <div class="input">
                  <label style="opacity: 0">btns</label>
                  <div class="d-flex justify-content-center">
                    <button class="btn-secondary btn px-5 mx-2">إلغاء</button>
                    <button class="btn btn-primary px-5">حفظ</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrow from '@/components/icons/IconArrow.vue'
import IconCalender from '@/components/icons/IconCalender.vue'
</script>

<style scoped></style>
