<script setup>
import LoanAccountDetails from '@/components/view/Loan-account-details.vue'
</script>
<template>
  <LoanAccountDetails class="scores-account scores" title="امتیاز حساب" buttonText="محاسبه امتیاز">
    <template #title-info>
      <img src="@/assets/icons/info-circle.svg" alt="info" />
    </template>
    <template #scores>
      <div class="scores-wrapper">
        <div class="scores__price">
          <span class="scores__price_number">۸۰۰٬۰۰۰٬۰۰۰</span>
          <span class="scores__price_unit">ریال</span>
        </div>
        <div class="scores__time">
          <span class="scores__time_number">۱۲</span>
          <span class="scores__time_unit">ماهه</span>
        </div>
      </div>
    </template>
  </LoanAccountDetails>
</template>

<style lang="scss">
.scores-wrapper {
  @include flex-box(column, center, center);
}
.scores {
  &__price {
    @include flex-box(row, center, center, 0.25rem);
    &_number {
      color: var(--primary-500);
      @include font-style(2.5rem, 700);
    }
    &_unit {
      color: var(--secondary-200);
      @include font-style(0.875rem, 400);
    }
  }
  &__time {
    @include flex-box(row, center, center, 0.25rem);
    &_number {
      color: var(--primary-500);
      @include font-style(1.125rem, 700);
    }
    &_unit {
      color: var(--secondary-200);
      @include font-style(0.875rem, 400);
    }
  }
}
</style>
