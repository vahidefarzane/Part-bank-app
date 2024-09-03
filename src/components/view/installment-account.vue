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
        <img src="../../assets/icons/arrow-left.svg" alt="">
    </template>
  </LoanAccountDetails>
</template>

<style lang="scss">
.installment-account {
  @include flex-box(column, space-between);
}
.installment-wrapper{
  @include flex-box(column, flex-end,null,0.75rem);
  flex: 1;
  margin-bottom: 1.25rem;
  

}
.installment {
  &__datails {
    @include flex-box(row, center, center);
    color: var(--secondary-200);
  }
  &__price ,&__time{
    @include flex-box(row,space-between,center)
  }
  &__price_title,
  &__time_title {
    color: var(--secondary-200);
    @include font-style(0.875rem, 400);
  }
  &__price_content,
  &__time_content {
    color: var(--black-500);
    @include font-style(0.875rem, 500);
  }
}
</style>
