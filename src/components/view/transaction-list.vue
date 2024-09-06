<script setup>
import dashboardTable from './dashboard-table.vue'
import baseSearch from '../common/base-search.vue';
</script>
<template>
  <main class="transaction">
    <section class="transaction__header header">
      <div class="header__title">
        <span class="header__title_name">لیست تراکنش‌ها</span>
        <span class="header__title_unit"> ( ریال )</span>
      </div>
      <div class="transaction__options">
        <baseSearch/>
      </div>
    </section>
    <dashboardTable />
  </main>
</template>

<style lang="scss">
.transaction {
  @include flex-box(column, null, null, 1.5rem);
  &__header {
    @include flex-box(row, space-between, center);
  }
  .header {
    &__title {
      &_name {
        @include font-style(1.25rem, 700);
        color: var(--black-500);
      }
      &_unit {
        @include font-style(1rem, 400);
        color: var(--secondary-200);
      }
    }
  }
}
</style>
