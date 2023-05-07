<template>
  <div
    class="modal fade"
    id="unitsModal"
    tabindex="-1"
    aria-labelledby="unitsModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered big-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="unitsModalLabel">بيانات العقار</h5>
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
                <label>الإسم كاملاً <span>(*)</span></label>
                <input type="text" />
              </div>
              <div class="input">
                <label>عدد الوحدات التجارية <span>(*)</span></label>
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
                <label>عدد الوحدات السكنية <span>(*)</span></label>
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
                <label> ملاحظات<span></span></label>
                <textarea></textarea>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input">
                <label>إسم العقار <span>(*)</span></label>
                <input type="text" />
              </div>
              <div class="input">
                <label>رقم الجوال <span>(*)</span></label>
                <input type="text" />
              </div>
              <div class="input">
                <label> العنوان<span></span></label>
                <input type="text" />
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button class="btn-secondary btn px-4 mx-2">إلغاء</button>
            <button class="btn btn-primary px-4">حفظ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrow from '@/components/icons/IconArrow.vue'
</script>

<style scoped></style>
