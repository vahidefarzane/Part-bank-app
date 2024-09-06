<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['sort'])
const handleSortChange = (event) => {
  emit('sort', event.target.value)
}
</script>
<template>
  <section class="sort">
    <div class="sort__title">
      <img src="@/assets/icons/sort.svg" alt="Group" class="sort__title_icon" />
      <label for="ordered" class="sort__title_name">مرتب سازی :</label>
    </div>
    <select @change="handleSortChange" name="date" id="ordered" class="sort__select">
      <option class="sort__option" value="all">همه</option>
      <option class="sort__option" value="asc">صعودی</option>
      <option class="sort__option" value="desc">نزولی</option>
    </select>
  </section>
</template>

<style lang="scss">
.sort {
  @include flex-box(row, center, center, 0.5rem);
  &__title {
    @include flex-box(row, center, center, 0.0625rem);
    @include font-style(14px, 400);
    color: var(--secondary-200);
  }
  &__select {
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid var(--secondary-400);
    background: var(--color-white);
    width: 11.4375rem;
    height: 2.125rem;
    // padding: 0.5rem;
  }
  &__option {
    color: var(--black-500);
  }
}
</style>
