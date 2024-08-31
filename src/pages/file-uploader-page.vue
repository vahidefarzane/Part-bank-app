<script setup>
import createDepositAccountWrapper from '@/components/common/create-deposit-account-wrapper.vue'
import uploadCard from '@/components/view/upload-card.vue'
import baseButton from '@/components/common/base-button.vue'
import { ref } from 'vue'

const uploadedImages = ref({
  front: null,
  back: null
})
const handleImageUpload = ({ id, file, url }) => {
  uploadedImages.value[id] = { file, url }
}
const submit = () => {
  if (!uploadedImages.value.front || !uploadedImages.value.back) {
    console.log('error')
  }
}
</script>
<template>
  <createDepositAccountWrapper title="تصویر کارت ملی">
    <form @submit.prevent="submit">
      <div class="file-uploader__container">
        <uploadCard
          caption="تصویر روی کارت ملی"
          altImage="Front of National Card"
          id="front"
          @image-uploaded="handleImageUpload"
        />
        <uploadCard
          caption="تصویر پشت کارت ملی"
          altImage="back of National Card"
          id="back"
          @image-uploaded="handleImageUpload"
        />
      </div>
      <div class="file-uploader__nav">
        <baseButton type="submit" class="file-uploader__nav-btn secondary">قبلی</baseButton>
        <baseButton class="file-uploader__nav-btn primary">ثبت و ادامه</baseButton>
      </div>
    </form>
  </createDepositAccountWrapper>
</template>

<style lang="scss">
.file-uploader {
  &__container {
    @include flex-box(row, center, center, 2.5rem);
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
