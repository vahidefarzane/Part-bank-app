<script setup>
import BaseButton from '../common/base-button.vue'

defineProps({
  title: {
    type: String,
    Required: true
  },
  buttonText: {
    type: String
  }
})
</script>

<template>
  <div class="loan-account">
    <div class="loan-account__info-bar">
      <h1 class="loan-account__title">{{ title }}</h1>
      <slot name="title-info" />
    </div>

    <slot name="scores" />

    <div class="loan-account__action-bar">
      <BaseButton class="loan-account__action-button secondary">
        {{ buttonText }}
        <template #post-icon><slot name="icon-button"/></template>
      </BaseButton>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/styles/sass/components/view/Loan-account-details.scss'
</style>
