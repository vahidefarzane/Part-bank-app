<script setup>
import baseDivider from '../common/base-divider.vue'
import sidebarItem from './sidebar-item.vue'
import dashboardIcon from '@/assets/icons/element-4.svg'
import walletIocn from '@/assets/icons/wallet.svg'
import cards from '@/assets/icons/cards.svg'
import wallet2 from "@/assets/icons/wallet2.svg"
import recriptSearch from '@/assets/icons/receipt-search.svg'
import cardPos from '@/assets/icons/card-pos.svg'
import exit from '@/assets/icons/exit.svg'
import { reactive } from 'vue'
const sideBarListItems = reactive([
  { id: 1, title: 'داشبورد', src: dashboardIcon, altImgText: 'dashboard' },
  { id: 2, title: 'حساب', src: walletIocn, altImgText: 'wallet' },
  { id: 3, title: 'تسهیلات', src: wallet2, altImgText: 'strong-box' },
  { id: 4, title: 'عملیات کارت', src: cards, altImgText: 'cards' },
  {
    id: 5,
    title: 'سفته الکترونیک',
    src: recriptSearch,
    altImgText: 'recript-search'
  },
  { id: 6, title: 'خدمات', src: cardPos, altImgText: 'card-pos' }
])
</script>
<template>
  <aside class="sidebar">
    <div class="sidebar__header">
      <span class="sidebar__name">وحیده فرزانه</span>
      <div class="sidebar__code">
        <span class="sidebar__code_title">کدملی:</span>
        <span class="sidebar__code_number">۰۹۱۲۳۴۵۶۷۸</span>
      </div>
    </div>
    <baseDivider class="sidebar__divider" />
    <ul class="sidebar__list">
      <li v-for="listItem in sideBarListItems" :key="listItem.id">
        <sidebarItem
          :src="listItem.src"
          :title="listItem.title"
          :altImgText="listItem.altImgText"
        />
      </li>
      <li>
        <div class="sidebar__list_last" @click="handelLogout">
          <img :src="exit" alt="exit" />
          <span>خروج</span>
        </div>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
.sidebar {
  @include flex-box(column, null, center, 1.25rem);
  width: 13.75rem;
  height: 50.25rem;
  padding: 1.5rem 0rem 0.5rem 0rem;
  background-color: var(--color-white);
  border-radius: 0.75rem;

  &__header {
    @include flex-box(column, null, center, 2.25rem);
  }
  &__name {
    @include font-style(1.125rem, 500);
    color: var(--black-500);
  }
  &__code {
    @include flex-box(row, space-between, center);
    width: 10.75rem;
    height: 1.25rem;
    &_title {
      color: var(--secondary-200);
      @include font-style(0.75rem, 400);
    }
    &_number {
      @include font-style(0.875rem, 400);
    }
  }
  &__divider {
    width: 12.25rem;
  }
  &__list {
    @include flex-box(column, null, flex-start, 0.125rem);
    padding: 0rem 0.5rem;
    width: 100%;
    &_last {
      @include flex-box(row, flex-start, center, 0.5rem);
      height: 2.75rem;
      padding: 0.5rem 1rem 0.5rem 0.75rem;
      border-radius: 0.375rem;
      &:hover {
        background-color: var(--secondary-300);
      }
      span {
        @include font-style(0.875rem, 400);
        color: var(--fail-500);
      }
    }
  }
}
</style>
