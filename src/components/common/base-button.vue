<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },

  submitting: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>
<template>
  <button
    :class="['button', { loading: loading, disabled: disabled }]"
    @click="handleClick"
    :disabled="disabled || loading"
  >
    <slot name="pre-icon" />
    <span v-if="!submitting && !loading">
      <slot />
    </span>
    <span v-if="submitting">
      <slot name="submitting" />
    </span>
    <span v-if="loading" class="button__loading">
      <slot name="loading" />
      <span class="button__spinner"></span>
    </span>
    <slot name="post-icon" />
  </button>
</template>

<style lang="scss">
@import '@/styles/sass/components/common/base-button.scss';
</style>
