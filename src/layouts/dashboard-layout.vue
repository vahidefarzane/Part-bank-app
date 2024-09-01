<script setup>
import theSidebar from '@/components/view/the-sidebar.vue'
</script>

<template>
  <main class="dashboard-layout">
    <theSidebar />
    <RouterView />
  </main>
</template>

<style lang="scss">
.dashboard-layout {
  @include flex-box(row, center, null, 1rem);
}
</style>
