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
    <label v-if="label" :for="inputId" class="input-label">{{ label }}</label>
    <div class="input-wrapper">
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

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
.input-label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.input-wrapper {
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0.5rem;
  background-color: #f9fafb;
}
.input-field {
  flex: 1;
  padding: 0.5rem;
  background-color: #f9fafb;
}
</style>
