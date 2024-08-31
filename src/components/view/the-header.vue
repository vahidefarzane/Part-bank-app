<script></script>

<template>
  <header class="header">
    <section class="header__logo">
      <img class="header__logo_icon" src="../../assets/icons/logo.svg" alt="logo" />
      <span class="header__logo_caption">پارت بانک</span>
    </section>
    <section class="header__user-info user-info">
      <img
        class="user-info__notification"
        src="../../assets/icons/Notification.svg"
        alt="notification"
      />
      <div class="user-info__avatar avatar">
        <img class="avatar__image" src="../../assets/icons/avatar.svg" alt="avatar" />
        <span class="avatar__number">۰۹۲۲۶۵۹۸۷۲</span>
      </div>
    </section>
  </header>
</template>

<style lang="scss">
.header {
  width: 100%;
  height: 4.25rem;
  box-shadow: 0px 2px 8px 0px rgba(21, 0, 43, 0.05);
  background-color: var(--color-white);
  @include flex-box(row, space-between, center);
  padding: 1rem 2.5rem;
  &__logo {
    @include flex-box(row, flex-start, center, 0.75rem);
    &_icon {
      width: 1.7845rem;
      height: 1.5rem;
    }
    &_caption {
      @include font-style(1rem, 400);
      color: var(--black-500);
    }
  }
  &__user-info {
    @include flex-box(row, space-between, center, 1rem);
  }
  .user-info {
    &__avatar {
      @include flex-box(row, space-between, center, 0.5rem);
    }
    .avatar {
      &__image {
        width: 2.5rem;
        height: 2.5rem;
      }
      &__number {
        color: var(--black-500);
        @include font-style(0.875rem,400)
        
      }
    }
  }
}
</style>
