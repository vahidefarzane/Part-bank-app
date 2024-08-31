<script setup>
import baseDivider from '../common/base-divider.vue'
defineProps({
  options: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="options-wrapper">
    <slot name="pre-content" />
    <div v-for="option in options" :key="option.name">
      <div class="options">
        <img class="options__icon" :src="option.src" :alt="option.altIcon" />
        <span class="options__text">{{ option.name }}</span>
      </div>
      <baseDivider class="options__divider" v-if="option.id !== options.length" />
    </div>
    <slot name="post-content" />
  </div>
</template>

<style lang="scss">
.options {
  width: 5rem;
  @include flex-box(row, flex-start, center, 0.5rem);

  &-wrapper {
    @include flex-box(column, flex-start, center);
  }
  &__divider {
    margin: 0.5rem 0;
    height: 1px;
  }
  &__icon {
  }
}
</style>
