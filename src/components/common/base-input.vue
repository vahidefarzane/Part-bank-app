<script setup>
import { ref } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
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

  labelStyle: {
    type: String
  },
  inputStyle: {
    type: String
  }
})
const inputId = ref(`input-${Math.random().toString(36).substr(2, 9)}`)

const { value, errorMessage, meta } = useField(() => props.name)
</script>

<template>
  <div class="input-container">
    <label v-if="label" :for="inputId" :class="labelStyle" class="input-label">{{ label }}</label>
    <div
      class="input-wrapper"
      :class="[inputStyle, { field_error: errorMessage, valid: meta.valid }]"
    >
      <slot name="prefix" />
      <input
        :id="inputId"
        v-model="value"
        :type="type"
        :placeholder="placeholder"
        @input="handleInput"
        class="input-field"
      />
      <slot name="suffix" />
    </div>
    <span class="error-msg" :class="errorMessage ? 'error_message' : ''">{{ errorMessage }}</span>
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  @include flex-box(column, center, flex-start, 0.25rem);
  margin-bottom: 1rem;
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
.field_error {
  border: 1px solid red !important;
}
.valid {
  border: 1px solid green !important;
}
.error_message{
  color: red;
}
.error-msg{
  height: 1rem;
  font-size: 14px;

}
</style>
