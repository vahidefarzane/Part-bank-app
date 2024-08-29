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
  },
  type: {
    type: String
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
    :type="type"
    :class="['button', { 'is-loading': loading, 'is-disabled': disabled }]"
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
      <span class="sppiner"></span>
    </span>
    <slot name="post-icon" />
  </button>
</template>

<style lang="scss" scoped>
.button {
  @include flex-box(row, center, center, 0.75rem);
  &__loading {
    @include flex-box(row, center, center, 0.25rem);
  }
}
.primary {
  background-color: var(--primary-500);
  color: var(--color-white);
}
.secondary {
  background-color: var(--primary-50);
  color: var(--black-500);
}
.is-loading {
  cursor: wait;
}
.is-disabled {
  cursor: not-allowed;
  opacity: 0.2;
}
.sppiner {
  display: flex;
  width: 1rem;
  height: 1rem;
  border: 2px solid var(--color-white);
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
