<script setup>
import createDepositAccountWrapper from '@/components/common/create-deposit-account-wrapper.vue'
import reviewInfo from '@/components/view/review-info.vue'
</script>
<template>
  <createDepositAccountWrapper title="تایید اطلاعات">
    <div class="review-info">
      <div class="review-info__group">
        <reviewInfo
          class="review-info__field"
          title="نام :"
          content="وحیده"
          titleStyle="review-info__title"
          contentStyle="review-info__content"
        />
        <reviewInfo
          class="review-info__field"
          title="نام خانوادگی :"
          content="فرزانه"
          titleStyle="review-info__title"
          contentStyle="review-info__content"
        />
        <reviewInfo
          class="review-info__field"
          title="کد پستی :"
          content="9179164123"
          titleStyle="review-info__title"
          contentStyle="review-info__content"
        />
      </div>
      <div class="review-info__group">
        <reviewInfo
          class="review-info__field"
          title="آدرس محل سکونت :"
          content="وکیل اباد "
          titleStyle="review-info__title"
          contentStyle="review-info__content"
        />
      </div>
      <div class="review-info__nav">
        <baseButton class="review-info__nav-btn secondary">قبلی</baseButton>
        <baseButton type="submit" class="review-info__nav-btn primary">افتتاح حساب</baseButton>
      </div>
    </div>
  </createDepositAccountWrapper>
</template>

<style lang="scss" >
.review-info {
  @include flex-box(column, flex-start, null, 0.25rem);
  &__title {
    @include font-style(1rem, 400);
    color: var(--secondary-200);
  }
  &__content {
    @include font-style(1rem, 400);
    color: var(--black-500);
  }
  &__group {
    @include flex-box(row, null, null, 7.5rem);
    margin-bottom: 2.5rem;
  }
  &__field {
    width: 10rem;
  }
  &__nav {
    @include flex-box(row, flex-end, center, 1rem);
    margin-top: 2rem;
    &-btn {
      @include flex-box(row, center, center);
      @include font-style(1rem, 400);
      width: 13rem;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      height: 3rem;
    }
  }
}
</style>
