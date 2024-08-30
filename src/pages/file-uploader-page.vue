<script setup>
import createDepositAccountWrapper from '@/components/common/create-deposit-account-wrapper.vue'
import uploadCard from '@/components/view/upload-card.vue'
</script>
<template>
  <createDepositAccountWrapper title="تصویر کارت ملی">
    <div class="uploader-container">
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
  </createDepositAccountWrapper>
</template>

<style lang="scss">
.uploader-container {
  @include flex-box(row, center, center, 2.5rem);
}
</style>
