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
  <div class="side-bar-item">
    <img :src="src" :alt="altImgText" />
    <span>{{ title }}</span>
  </div>
</template>

<style></style>
