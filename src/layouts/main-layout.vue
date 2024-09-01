<script setup>
import theHeader from '@/components/view/the-header.vue'
</script>

<template>
  <main class="main-layout">
    <theHeader />
    <RouterView />
  </main>
</template>

<style lang="scss">
.main-layout {
  @include flex-box(column, null, center);
  background-color: var(--secondary-50);
  height: 100vh;
}
</style>
