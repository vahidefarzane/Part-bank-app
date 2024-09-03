// stores/timerStore.js
import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', {
  state: () => ({
    timer: 0,
    isRunning: false,
    intervalId: null
  }),
  actions: {
    startTimer(duration) {
      this.stopTimer()
      this.timer = duration
      this.isRunning = true
      this.intervalId = setInterval(() => {
        if (this.timer > 0) {
          this.timer--
        } else {
          this.stopTimer()
        }
      }, 1000)
    },
    stopTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
      this.isRunning = false
    },
    resumeTimer() {
      if (this.isRunning && this.timer > 0) {
        this.isRunning = true
        this.intervalId = setInterval(() => {
          if (this.timer > 0) {
            this.timer--
          } else {
            this.stopTimer()
          }
        }, 1000)
      }
    }
  },
  persist: true
})
