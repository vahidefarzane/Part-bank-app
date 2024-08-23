<script setup>
import { computed, onUnmounted, onMounted } from 'vue'
import { useTimerStore } from '@/stores/timerStore'

const timerStore = useTimerStore()

const formattedTime = computed(() => {
  const minutes = Math.floor(timerStore.timer / 60)
  const seconds = timerStore.timer % 60
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
})

const startmyTimer = () => {
  timerStore.startTimer()
}
onUnmounted(() => {
  timerStore.stopTimer()
})
onMounted(() => {
  timerStore.loadTimerState()
})
</script>

<template>
  <div class="timer-wrapper">
    <button @click.prevent="startmyTimer()">start</button>
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
