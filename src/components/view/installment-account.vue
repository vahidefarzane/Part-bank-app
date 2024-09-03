<script setup>
import LoanAccountDetails from './Loan-account-details.vue'
</script>
<template>
  <LoanAccountDetails
    class="installment-account installment"
    title="قسط پیش رو"
    buttonText="پرداخت"
  >
    <template #title-info>
      <div class="installment__datails">
        <span>جزئیات</span>
        <img src="@/assets/icons/angle-left.svg" alt="info" />
      </div>
    </template>
    <template #scores>
      <div class="installment-wrapper">
        <div class="installment__price">
          <span class="installment__price_title">مبلغ قسط:</span>
          <span class="installment__price_content">۳۵۰٬۰۰۰٬۰۰۰ ریال</span>
        </div>
        <div class="installment__time">
          <span class="installment__time_title">تاریخ سررسید:</span>
          <span class="installment__time_content">۱۴۰۱/۱۲/۱۵</span>
        </div>
      </div>
    </template>
    <template #icon-button>
        <img src="@/assets/icons/arrow-left.svg" alt="arrow-left">
    </template>
  </LoanAccountDetails>
</template>

<style lang="scss">
@import '@/styles/sass/components/view/installment-account.scss'
</style>
