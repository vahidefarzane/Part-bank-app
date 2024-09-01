<script setup>
import dashboardIcon from '@/assets/icons/element-4.svg'
import walletIocn from '@/assets/icons/wallet.svg'
import edit2 from '@/assets/icons/edit2.svg'
import cards from '@/assets/icons/cards.svg'
import recriptSearch from '@/assets/icons/receipt-search.svg'
import cardPos from '@/assets/icons/card-pos.svg'
import exit from '@/assets/icons/exit.svg'
import { reactive } from 'vue'
const sideBarListItems = reactive([
  { id: 1, title: 'داشبورد', src: dashboardIcon, altImgText: 'dashboard' },
  { id: 2, title: 'حساب', src: walletIocn, altImgText: 'wallet' },
  { id: 3, title: 'تسهیلات', src: edit2, altImgText: 'strong-box' },
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
  <aside class="side-bar">
    <div class="side-bar__header">
      <span class="side-bar__name">وحیده فرزانه</span>
      <div class="side-bar__code">
        <span class="side-bar__code_title">کدملی:</span>
        <span class="side-bar__code_number">0923941894</span>
      </div>
    </div>
    <dividerHr />
    <ul class="side-bar__list">
      <li class="" v-for="listItem in sideBarListItems" :key="listItem.id">
        <sideBarItem
          :src="listItem.src"
          :title="listItem.title"
          :altImgText="listItem.altImgText"
        />
      </li>
      <li>
        <div class="side-bar__list_last" @click="handelLogout">
          <img :src="exit" alt="exit" />
          <span>خروج</span>
        </div>
      </li>
    </ul>
  </aside>
</template>

<style></style>
