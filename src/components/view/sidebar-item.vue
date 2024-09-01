<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  altImgText: {
    type: String,
    required: false,
    default: 'icon'
  }
})
</script>

<template>
  <div class="sidebar-item">
    <img class="sidebar-item_icon" :src="src" :alt="altImgText" />
    <span class="sidebar-item_name">{{ title }}</span>
  </div>
</template>

<style lang="scss">
.sidebar-item {
  @include flex-box(row, flex-start, center, 0.5rem);
  height: 2.75rem;
  padding: 0.5rem 1rem 0.5rem 0.75rem;
  border-radius: 0.375rem;
  &:hover {
    background-color: var(--secondary-300);
  }
  &_name {
    @include font-style(0.875rem, 400);
    color: var(--secondary-200);
  }
}
</style>
