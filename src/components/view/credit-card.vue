<script>
export default {}
</script>

<template>
  <div class="credit-card">
    <div class="credit-card__pattern">
      <div class="credit-card__frame card">
        <div class="card__base">
          <img src="@/assets/icons/more.svg" alt="more-info" />
          <div class="card__inventory">
            <span class="card__inventory_title">موجودی کل</span>
            <span class="card__inventory_count">۴٬۲۳۹٬۸۷۴٬۰۰۰</span>
          </div>
        </div>

        <div class="card__number">
          <!-- <div>{{ depositStore.cardNumber?.slice(0, 4) }}</div>
          <div>{{ depositStore.cardNumber?.slice(4, 8) }}</div>
          <div>{{ depositStore.cardNumber?.slice(8, 12) }}</div>
          <div>{{ depositStore.cardNumber?.slice(12, 16) }}</div> -->
          <span>۵۴۱۸</span>
          <span>۲۷۴۱</span>
          <span>۶۶۹۸</span>
          <span>۸۲۵۱</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.credit-card {
  width: 456px;
  height: 260px;
  border-radius: 12px;
  background: linear-gradient(
    112deg,
    var(--primary-500) 0%,
    var(--secondary-100) 100%,
    var(--secondary-100) 100%
  );
  &__pattern {
    background: url(@/assets/images/pattern-card.png);
  }
  &__frame {
    width: 456px;
    height: 260px;
    @include flex-box(column, space-between);
    border-radius: 12px;
    padding: 2.25rem 1.5rem 2rem 2rem;
    background: url(@/assets/images/noise-card.png) 0% 0% / 50.399999380111694px
      50.399999380111694px repeat;
  }
  .card {
    &__base {
      @include flex-box(row, space-between, flex-start);
    }
    &__number {
      @include flex-box(row, center, center, 1rem);
      color: var(--color-white);
      @include font-style(2.25rem, 400);
    }
    &__inventory {
      @include flex-box(column, center, flex-end);
      color: var(--color-white);
      &_title {
        @include font-style(1rem, 500);
      }
      &_count {
        @include font-style(2.5rem, 500);
      }
    }
  }
}
</style>
