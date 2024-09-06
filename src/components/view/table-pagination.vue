<script setup>
import baseButton from '../common/base-button.vue'
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  filteredItems: {
    type: Array,
    default: () => []
  },
  itemsPerPage: {
    type: Number,
    default: 5
  }
})

const currentPage = ref(1)

const totalPages = computed(() => {
  return Math.ceil(props.filteredItems.length / props.itemsPerPage)
})
const endIndex = computed(() => {
  return currentPage.value * props.itemsPerPage
})
const startIndex = computed(() => {
  return endIndex.value - props.itemsPerPage
})

const dataPerPage = computed(() => {
  return props.filteredItems.slice(startIndex.value, endIndex.value)
})

const visiblePages = computed(() => {
  const pages = []
  let startPage = Math.max(currentPage.value - 1, 1)
  let endPage = Math.min(currentPage.value + 1, totalPages.value)

  if (currentPage.value === 1) {
    endPage = Math.min(3, totalPages.value)
  } else if (currentPage.value === totalPages.value) {
    startPage = Math.max(totalPages.value - 2, 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }
  return pages
})

const emit = defineEmits(['pageChanged'])
watch([currentPage, dataPerPage], () => {
  emit('pageChanged', dataPerPage.value)
})

onMounted(() => {
  emit('pageChanged', dataPerPage.value)
})

const goToPage = (page) => {
  currentPage.value = page
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}
</script>
<template>
  <section class="pagination">
    <baseButton class="pagination__btn" :disabled="currentPage === 1" @click="prevPage">
      <img
        src="@/assets/icons/angle-left.svg"
        alt="angle-right"
        class="pagination__btn_angle-right"
      />
    </baseButton>

    <baseButton
      class="pagination__btn"
      v-for="page in visiblePages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="goToPage(page)"
    >
      {{ page }}
    </baseButton>

    <baseButton class="pagination__btn" :disabled="currentPage === totalPages" @click="nextPage">
      <img src="@/assets/icons/angle-left.svg" alt="angel-left" />
    </baseButton>
  </section>
</template>

<style lang="scss">
.pagination {
  @include flex-box(row, center, center, 0.75rem);
  &__btn {
    @include flex-box(row, center, center);
    padding: 0;
    border: none;
    outline: none;
    color: var(--secondary-200);
    width: 30px;
    height: 30px;
    border-radius: 4px;
    font-size: 14px;
    background-color: var(--secondary-300);
    &:hover {
      background-color: var(--primary-300);
      color: var(--color-white);
    }
    &.active {
      @include flex-box(row, center, center);
      padding: 0;
      border: none;
      outline: none;
      color: var(--color-white);
      width: 30px;
      height: 30px;
      border-radius: 4px;
      font-size: 14px;
      background-color: var(--primary-500);
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    &_angle-right {
      transform: rotate(180deg);
    }
  }
  //
  //   &__number-btn {
  //     padding: 0;
  //     border: none;
  //     color: var(--secondary-200);
  //     width: 30px;
  //     height: 30px;
  //     border-radius: 4px;
  //     font-size: 14px;
  //     background-color: var(--secondary-300);
  //   }
}
</style>
