<script setup>
import { defineProps } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String
  },
  label: {
    type: String,
    requaired: true
  },
  placeholder: {
    type: String
  },
  labelStyle: {
    type: String
  },
  textareaStyle: {
    type: String
  },
  rows: {
    type: Number,
    default: 10
  }
})

const { value, errorMessage, meta } = useField(props.name)
</script>

<template>
  <div class="textarea">
    <label class="textarea__label" :class="labelStyle" :for="name">{{ label }}</label>
    <textarea
      v-model="value"
      :placeholder="placeholder"
      class="textarea__field"
      :class="[textareaStyle, { field_error: errorMessage, valid: meta.valid }]"
      :name="name"
      :id="name"
      :rows="rows"
    ></textarea>
    <span class="error-msg" :class="errorMessage ? 'error_message' : ''">{{ errorMessage }}</span>
  </div>
</template>

<style lang="scss">
@import '@/styles/sass/components/view/base-textarea.scss';
</style>
