<script setup>
import { computed, onUnmounted, onMounted } from 'vue'
import { useTimerStore } from '@/stores/timerStore'

const timerStore = useTimerStore()

const formattedTime = computed(() => {
  const minutes = Math.floor(timerStore.timer / 60)
  const seconds = timerStore.timer % 60
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
})

onUnmounted(() => {
  timerStore.stopTimer()
})
onMounted(() => {
  if (timerStore.isRunning === false) {
    timerStore.startTimer()
  } else {
    timerStore.resumeTimer()
  }
})
</script>

<template>
  <div class="timer-wrapper">
    <span class="timer">زمان باقی مانده {{ formattedTime }}</span>
  </div>
</template>

<style lang="scss" scoped>
.timer {
  &-wrapper {
    display: flex;
    height: 3rem;
    padding: 0.5rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }
  color: var(--primary-500);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.75rem;
}
</style>
