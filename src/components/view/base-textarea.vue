<script setup>
import { defineProps } from 'vue'

defineProps({
  name: {
    type: String
  },
  label: {
    type: String,
    default: 'آدرس'
  }
})
</script>

<template>
  <div class="textarea">
    <label class="textarea__label" :for="name">{{ label }}</label>
    <textarea class="textarea__field" :name="name" :id="name" cols="30" rows="10"></textarea>
  </div>
</template>

<style lang="scss">
.textarea {
  @include flex-box(column, center, flex-start, 0.25rem);

  &__label {
    padding: 0 0.5rem;
  }
  &__field {
    width: 100%;
  }
}
</style>
