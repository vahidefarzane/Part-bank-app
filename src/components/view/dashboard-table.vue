<script setup>
const transactions = [
  {
    id: 1,
    type: 'withdraw',
    dateTime: 'Sat Jul 27 2024 16:19:02 GMT+0330 (Iran Standard Time)',
    Amount: '21,200,000'
  },
  {
    id: 2,
    type: 'deposit',
    dateTime: 'Sat Jul 27 2024 16:19:02 GMT+0330 (Iran Standard Time)',
    Amount: '21,200,000'
  },
  {
    id: 3,
    type: 'withdraw',
    dateTime: 'Sat Jul 27 2024 16:19:02 GMT+0330 (Iran Standard Time)',
    Amount: '21,200,000'
  },
  {
    id: 4,
    type: 'deposit',
    dateTime: 'Sat Jul 27 2024 16:19:02 GMT+0330 (Iran Standard Time)',
    Amount: '21,200,000'
  },
  {
    id: 5,
    type: 'withdraw',
    dateTime: 'Sat Jul 27 2024 16:19:02 GMT+0330 (Iran Standard Time)',
    Amount: '21,200,000'
  },
  
]
</script>
<template>
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
        <tr class="table__row table__row_body" v-for="trans in transactions" :key="trans.id">
          <td class="table__cell table__cell_body">
            {{ trans.type === 'deposit' ? 'واریز' : 'برداشت' }}
          </td>
          <td class="table__cell table__cell_body">{{ trans.dateTime }}</td>
          <td class="table__cell table__cell_body">{{ trans.Amount }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="scss">
.transaction-table {
  .table {
    width: 100%;
    border-collapse: collapse;
    &__header {
      background-color: var(--primary-500);
      color: var(--color-white);
    }
    &__body {
      .table__row {
        &:nth-child(even) {
          background-color: var(--secondary-300);
        }
      }
    }
    &__row {
      width: 100%;
      &_header {
        height: 3.75rem;
        background-color: var(--primary-500);
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
      &_body {
        height: 3.8125rem;
      }
    }
  }
}
</style>
