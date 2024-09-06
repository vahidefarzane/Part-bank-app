<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['search'])
const searchValue = ref('')
const updateSearch = () => {    
  emit('search', searchValue.value)
}
</script>
<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      v-model="searchValue"
      @input="updateSearch"
      placeholder="جستجو"
    />
    <img src="@/assets/icons/search.svg" class="search__icon" />
  </div>
</template>

<style lang="scss">
.search {
  @include flex-box(row, space-between, center, 0);
  border-radius: 0.5rem;
  border: 1px solid var(--secondary-400);
  background: var(--color-white);
  width: 16.0625rem;
  height: 2.125rem;
  position: relative;
  padding-right: 0.5rem;
  &:focus::placeholder {
    color: transparent;
  }
  &__input {
    &::placeholder {
      color: var(--secondary-200);
    }
  }
  &__icon {
    position: absolute;
    left: 0px;
    bottom: -1px;
    background-color: var(--primary-50);
    padding: 0.5rem;
    overflow: hidden;
    border-radius: 0.5rem 0 0 0.5rem;
  }
}
</style>
