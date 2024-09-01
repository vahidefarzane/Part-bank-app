<script setup>
import BaseDivider from './base-divider.vue'

defineProps({
  title: {
    type: String,
    requaired: true
  },
})
</script>

<template>
 
    <section class="layout">
      <header class="layout__header">
        <h1 class="layout__title">{{ title }}</h1>
      </header>
      <BaseDivider />
      <main>
        <slot />
      </main>
    </section>
  
</template>

<style lang="scss" scoped>

.layout {
  @include flex-box(column, null, null, 2.5rem);
  width: 87.5rem;
  padding: 2.5rem;
  border-radius: 0.75rem;
  background-color: var(--color-white);
  height: fit-content;
  // margin-top: 2rem;
  &__header {
    @include flex-box(row, center, center);
  }
  &__title {
    @include font-style(1.25rem, 700);
    color: var(--black-500);
  }
 
}
</style>
