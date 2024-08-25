<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  labelStyle: {
    type: String
  },
  inputStyle: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])

const inputId = ref(`input-${Math.random().toString(36).substr(2, 9)}`)
const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="input-container">
    <label v-if="label" :for="inputId" :class="labelStyle" class="input-label">{{ label }}</label>
    <div class="input-wrapper" :class="inputStyle">
      <slot name="prefix" />
      <input
        :id="inputId"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
        class="input-field"
      />
      <slot name="suffix" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  @include flex-box(column, center, flex-start, 0.25rem);
  margin-bottom: 2rem;
}
.input-label {
  padding: 0 0.5rem;
}
.input-wrapper {
  @include flex-box(row, space-between, center);
  width: 100%;
  padding: 0 0.5rem;
}
.input-field {
  background-color: transparent;
}
</style>
