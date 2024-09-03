<script setup>
import { computed, onUnmounted, onMounted } from 'vue'
import { useTimerStore } from '@/stores/timerStore'

const props = defineProps({
  timeInSeconds: {
    type: Number,
    default: 120
  }
})

const timerStore = useTimerStore()

const formattedTime = computed(() => {
  const minutes = Math.floor(timerStore.timer / 60)
  const seconds = timerStore.timer % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

onUnmounted(() => {
  timerStore.stopTimer()
})
onMounted(() => {
  if (timerStore.isRunning) {
    timerStore.startTimer(props.timeInSeconds)
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

<style lang="scss">
@import '@/styles/sass/components/view/app-timer.scss'

</style>
