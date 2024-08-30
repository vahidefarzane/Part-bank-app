<script setup></script>
<template>
  <div class="upload-card">
    <div class="upload-card__link-wrapper" v-if="true">
    <div class="upload-card__img" v-if="false"></div>

      <img class="upload-card__icon" src="./../../assets/icons/uploader.svg" alt="upload" />

      <div class="upload-card__link">
        <span class="upload-card__link_light">تصویر را بکشید و اینجا رها کنید یا </span>
        <span class="upload-card__link_bold">کلیک کنید . </span>
      </div>
    </div>

    <div class="upload-card__caption caption">
      <span class="caption__text">تصویر روی کارت ملی</span>
      <span class="caption__options"> </span>
    </div>
  </div>
</template>

<style lang="scss">
.upload-card {
  @include flex-box(column);
  background-color: var(--secondary-300);
  border-radius: 0.75rem;
  width: 20rem;
  height: 14.5rem;

  &__link-wrapper {
    @include flex-box(column, center, center, 0.5rem);
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23E2EDFFFF' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
    height: 11.25rem;
  }
  &__icon {
    width: 4.25rem;
    height: 3.15881rem;
  }
  &__link {
    text-align: center;
    width: 10rem;
    font-size: 0.875rem;
    line-height: normal;
    &_light {
      color: var(--secondary-200);
    }
    &_bold {
      color: var(--primary-500);
      font-weight: 500;
    }
  }
}
.caption {
  padding: 1rem;

  &__text {
    @include font-style(0.875rem, 400);
    color: var(--black-500);
  }
}
</style>
