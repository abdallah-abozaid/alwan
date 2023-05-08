<template>
  <div
    class="modal fade"
    id="tanantReportModal"
    tabindex="-1"
    aria-labelledby="tanantReportModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="tanantReportModalLabel">تقرير جديد</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input">
            <label>إسم التقرير <span>(*)</span></label>
            <input type="text" />
          </div>
          <div class="input">
            <label>المستأجرين <span>(*)</span></label>
            <input type="text" />
          </div>
          <div class="input">
            <label>رقم الجوال <span>(*)</span></label>
            <input type="text" />
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn-secondary btn px-4 mx-2">إلغاء</button>
            <button class="btn btn-primary px-4">إضافة </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
