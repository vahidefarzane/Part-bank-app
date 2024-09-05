<script setup>
import scoresAccount from '@/components/view/scores-account.vue'
import installmentAccount from '@/components/view/installment-account.vue'
import creditCard from '@/components/view/credit-card.vue'
import transactionList from '@/components/view/transaction-list.vue'
</script>

<template>
  <main class="dashboard">
    <section class="dashboard__scores-section">
      <creditCard />
      <scoresAccount />
      <installmentAccount />
    </section>
    <section class="dashboard__table">
      <transactionList />
    </section>
  </main>
</template>

<style lang="scss">
.dashboard {
  @include flex-box(column, null, null, 1.5rem);
  &__scores-section {
    @include flex-box(row, null, center, 1rem);
  }
  &__table {
    width: 72.75rem;
    height: 32.5rem;
    background-color: var(--color-white);
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    border-radius: 0.75rem;
  }
}
</style>
