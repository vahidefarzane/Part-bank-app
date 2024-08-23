// stores/timerStore.js
import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', {
  state: () => ({
    timer: 10,
    intervalId: null
  }),
  actions: {
    startTimer(duration = 10) {
      this.timer = duration
      this.intervalId = setInterval(() => {
        if (this.timer > 0) {
          this.timer--
          this.saveTimerState()
        } else {
          clearInterval(this.intervalId)
          this.intervalId = null
        }
      }, 1000)
    },
    stopTimer() {
      clearInterval(this.intervalId)
      this.intervalId = null
      this.saveTimerState()
    },
    saveTimerState() {
      localStorage.setItem('timerState', JSON.stringify(this.$state))
    },
    loadTimerState() {
      const savedState = localStorage.getItem('timerState')
      if (savedState) {
        this.timer = JSON.parse(savedState).timer
        this.intervalId = JSON.parse(savedState).intervalId
        if (this.timer > 0 && this.intervalId !== null) {
          this.startTimer(this.timer)
        }
      }
    }
  },
  persist: true
})
