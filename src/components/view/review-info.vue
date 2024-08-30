<script setup>
defineProps({
  title: {
    type: String,
    Required: true
  },
  content: {
    type: String,
    Required: true
  },
  titleStyle: {
    type: String
  },
  contentStyle: {
    type: String
  }
})
</script>
<template>
  <div class="review-info">
    <span class="review-info__title" :class="titleStyle">{{ title }}</span>
    <span class="review-info__content" :class="contentStyle">{{ content }}</span>
  </div>
</template>

<style lang="scss">
.review-info {
  @include flex-box(column, flex-start, null, 0.25rem);
}
</style>
