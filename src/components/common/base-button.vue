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
    :class="['btn', { 'is-loading': loading, 'is-disabled': disabled }]"
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
    <span v-if="loading" class="btn-content">
      <slot name="loading" />
    </span>

    <slot name="post-icon" />
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  width: 22.125rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.5rem;
  background-color: var(--primary-500);
  color: var(--color-white);
}

.is-loading {
  cursor: wait;
}

.is-disabled {
  cursor: not-allowed;
  opacity: 0.2;
}
</style>
