<script setup>
import scoresAccount from '@/components/view/scores-account.vue';
</script>

<template>
  <main class="dashboard">
    <section class="dashboard__scores-section">
      <scoresAccount/>
    </section>
    <section class="dashboard__table"></section>
  </main>
</template>

<style lang="scss">
.dashboard {
  &__scores-section {
    @include flex-box(row, null, center, 1rem);
  }
 
}
</style>
