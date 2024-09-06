<script setup>
import { defineEmits, ref, computed } from 'vue'
import angleDown from '../../assets/icons/angle-down.svg'
import angleUp from '../../assets/icons/angle-up.svg'

const emit = defineEmits(['sort'])

const options = [
  { value: 'all', label: 'همه' },
  { value: 'asc', label: 'صعودی' },
  { value: 'desc', label: 'نزولی' }
]

const selectedValue = ref('all')
const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option) => {
  selectedValue.value = option.value
  emit('sort', option.value)
  isOpen.value = false
}

const selectedLabel = computed(() => {
  const selectedOption = options.find((option) => option.value === selectedValue.value)
  return selectedOption ? selectedOption.label : 'همه'
})
</script>
<template>
  <section class="dropdown">
    <div class="dropdown__label">
      <img src="@/assets/icons/sort.svg" alt="Group" class="dropdown__label_icon" />
      <label for="ordered" class="dropdown__label_name">مرتب سازی :</label>
    </div>
    <div class="dropdown__input">
      <div class="dropdown__header" @click="toggleDropdown">
        <span class="dropdown__header_name">{{ selectedLabel }}</span>

        <img :src="isOpen ? angleUp : angleDown" :alt="isOpen ? 'angle-up' : 'angle-down'" />
      </div>
      <div class="dropdown__list" v-if="isOpen">
        <div
          v-for="option in options"
          :key="option.value"
          class="dropdown__list_item"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.dropdown {
  @include flex-box(row, center, center, 0.5rem);
  &__header {
    @include flex-box(row, space-between, center);
    padding-right: 0.5rem;
    height: 100%;
    &_name {
      @include font-style(0.875rem, 400);
      color: var(--black-500);
    }
  }
  &__label {
    @include flex-box(row, center, center, 0.0625rem);
    @include font-style(14px, 400);
    color: var(--secondary-200);
  }
  &__input {
    position: relative;
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid var(--secondary-400);
    background: var(--color-white);
    width: 11.4375rem;
    height: 2.125rem;
  }
  &__list {
    @include flex-box(column, flex-start, null, 0.5rem);
    position: absolute;
    top: 3rem;
    width: 11.4375rem;
    padding: 0.5rem;
    background-color: var(--color-white);
    border-radius: 0.5rem;
    box-shadow: 0px 2px 8px 0px rgba(21, 0, 43, 0.05);
    border: 1px solid var(--secondary-400);

    &_item {
      @include font-style(14px, 400);
      color: var(--black-500);
      padding: 0.2rem 0.5rem;
      border-radius: 0.2rem;
      transition: font-weight 0.15s;

      &:hover {
        background-color: var(--primary-50);
        @include font-style(14px, 500);
      }
    }
  }
}
</style>
