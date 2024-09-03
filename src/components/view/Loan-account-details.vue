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
.loan-account {
  @include flex-box(column);
  background-color: var(--color-white);
  border-radius: 0.75rem;
  height: 16.25rem;
  width: 21.125rem;
  padding: 1.5rem;
  &__info-bar {
    @include flex-box(row, space-between, center);
  }
  &__title {
    color: var(--black-500);
    @include font-style(1.25rem, 500);
  }
  &__action-button{
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    @include font-style(1rem,700)

  }
}
</style>
