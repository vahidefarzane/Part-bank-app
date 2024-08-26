<script setup>
import appTimer from '../app-timer.vue'
import { computed, ref } from 'vue'
import baseButton from '@/components/common/base-button.vue'
import otpInputs from './otp-inputs.vue'
import { useTimerStore } from '@/stores/timerStore'
import router from '@/router'

const timerStore = useTimerStore()

defineProps({
  phoneNumber: {
    type: String,
    required: true
  },
  OTPCount: {
    type: Number,
    default: 6
  }
})

const isLoading = ref(false)
const isDisabled = computed(() => {
  return timerStore.timer !== 0 && isSubmiting.value === false
})
const isOtpComplete = ref(false)
const isSubmiting = ref(false)
const startTime = ref(false)

const handleClick = () => {
  if (isSubmiting.value) {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
      router.push('login')
    }, 2000)
  }
  isLoading.value = true
  isSubmiting.value = false
  setTimeout(() => {
    timerStore.startTimer()
    isLoading.value = false
    startTime.value = true
    isSubmiting.value = false
  }, 3000)
}

const handleOtpChange = (otp) => {
  isOtpComplete.value = otp.length === 6
  if (isOtpComplete.value) {
    isSubmiting.value = true
    isDisabled.value = false
  } else {
    isSubmiting.value = false
    isDisabled.value = true
  }
}
const timer = computed(() => timerStore.timer)
if (timer.value === 0) {
  isDisabled.value = false
}
</script>
<template>
  <div class="otp-wrapper">
    <form class="otp-form">
      <div class="otp-form__input-section">
        <h1 class="otp-form__title">کد تایید برای شماره {{ phoneNumber }} ارسال شد</h1>
        <div class="otp-form__input-group input-group">
          <h2 class="input-group__label">کدتایید</h2>
          <div class="input-group__inputs">
            <otpInputs :numberOfdigits="6" @otpChange="handleOtpChange" />
          </div>
          <p class="input-group__caption">کد ارسال {{ OTPCount }} رقمی را اینجا وارد کنید</p>
        </div>
      </div>
      <div class="otp-form__action-section">
        <appTimer />
        <baseButton
          class="otp-form__submit-btn primary"
          :loading="isLoading"
          :disabled="isDisabled"
          :submitting="isSubmiting"
          @click="handleClick"
        >
          ارسال مجدد
          <template #submitting>ارسال</template>
          <template #loading> {{ isSubmiting ? 'در حال ورود' : 'در حال ارسال کد ...' }} </template>
        </baseButton>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/sass/components/view/otp-form.scss';
</style>
