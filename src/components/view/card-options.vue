<script setup></script>

<template>
  <div class="options-wrapper">
    <slot name="pre-content" />
    <slot name="main" />
    <slot name="post-content" />
  </div>
</template>

<style lang="scss">
.options-wrapper {
  @include flex-box(column, flex-start, center, 0.5rem);
}
</style>
