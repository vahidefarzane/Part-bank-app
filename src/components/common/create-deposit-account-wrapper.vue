<script setup>
defineProps({
  title: {
    type: String,
    requaired: true
  },
  primaryBtnContent: {
    type: String,
    requaired: true,
    default: 'ثبت و ادامه'
  },
  secondaryBtnContent: {
    type: String,
    requaired: true,
    default: 'قبلی'
  }
})
</script>

<template>
  <section class="container">
    <header>{{ title }}</header>
    <main>
      <slot />
    </main>
    <nav>
      <div>
        <button>{{ primaryBtnContent }}</button>
        <button>{{ secondaryBtnContent }}</button>
      </div>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
.container {
  @include flex-box(column, null, flex-start, 2.5rem);
  width: 87.5rem;
  padding: 2.5rem;
  border-radius: 0.75rem;
  background-color: var(--color-white);
}
</style>
