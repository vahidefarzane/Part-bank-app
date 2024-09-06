<script setup>
import { ref } from 'vue'
import tablePagination from './table-pagination.vue'

const paginatedTransactions = ref([])
</script>
<template>
  <div class="container">
    <section class="transaction-table">
      <table class="table">
        <thead class="table__header">
          <tr class="table__row table__row_header">
            <th class="table__cell table__cell_header">نوع</th>
            <th class="table__cell table__cell_header">تاریخ و ساعت تراکنش</th>
            <th class="table__cell table__cell_header">مبلغ تراکنش</th>
          </tr>
        </thead>
        <tbody class="table__body">
          <tr
            class="table__row table__row_body"
            v-for="trans in paginatedTransactions"
            :key="trans.id"
          >
            <td class="table__cell table__cell_body">
              {{ trans.type === 'deposit' ? 'واریز' : 'برداشت' }}
            </td>
            <td class="table__cell table__cell_body">{{ trans.dateTime }}</td>
            <td class="table__cell table__cell_body">{{ trans.Amount }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <tablePagination @pageChanged="paginatedTransactions = $event" />
  </div>
</template>

<style lang="scss">
.container {
  @include flex-box(column,null,null,0.94rem)
}
.transaction-table {
  height: 22.8rem;
  .table {
    width: 100%;
    border-collapse: collapse;
    &__header {
      background-color: var(--primary-500);
      color: var(--color-white);
      .table__row {
        height: 3.75rem;
        background-color: var(--primary-500);
      }
    }
    &__body {
      .table__row {
        height: 3.8125rem;

        &:nth-child(even) {
          background-color: var(--secondary-300);
        }
      }
    }

    &__cell {
      width: 33.34%;
      text-align: center;
      &:first-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }
      &:last-child {
        border-radius: 0.5rem 0 0 0.5rem;
      }
      &_header {
        @include font-style(1rem, 500);
        background-color: var(--primary-500);
        padding: 0.625rem;
      }
    }
  }
}
</style>
