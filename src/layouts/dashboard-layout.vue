<script setup>
import theSidebar from '@/components/view/the-sidebar.vue'
</script>

<template>
  <main class="dashboard-layout">
    <theSidebar />
    <div class="dashboard-main">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss">
.dashboard-layout {
  @include flex-box(row, null, center, 1rem);
  width: 73%;
}
.dashboard-main {
  width: 100%;
  height: 100%;
}
</style>
