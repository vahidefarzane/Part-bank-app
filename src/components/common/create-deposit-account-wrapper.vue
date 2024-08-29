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
  <div class="container">
    <section class="layout">
      <header class="layout__header">
        <h1 class="layout__title">{{ title }}</h1>
      </header>
      <BaseDivider />
      <main>
        <slot />
      </main>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  // background-color: var(--secondary-50);
  background-color: rgb(100, 185, 157);
  height: 100vh;
  padding-top: 2rem;
}
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
