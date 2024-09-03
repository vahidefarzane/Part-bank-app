<script setup>
import appTimer from '../app-timer.vue'
import { computed, ref } from 'vue'
import baseButton from '@/components/common/base-button.vue'
import otpInputs from './otp-inputs.vue'
import { useTimerStore } from '@/stores/timerStore'
import router from '@/router'

const timerStore = useTimerStore()

const props = defineProps({
  phoneNumber: {
    type: String,
    required: true
  },
  OTPCount: {
    type: Number,
    default: 6
  }
})

const timeInSeconds = 5
const isLoading = ref(false)
const isSubmitting = ref(false)
const isOtpComplete = ref(false)
const isDisabled = computed(() => {
  return timerStore.timer !== 0 && isSubmitting.value === false
})

const handleClick = () => {
  isLoading.value = true
  if (isSubmitting.value) {
    setTimeout(() => {
      isLoading.value = false
      router.push('login')
    }, 2000)
  } else {
    setTimeout(() => {
      timerStore.startTimer(timeInSeconds)
      isLoading.value = false
      isSubmitting.value = false
    }, 3000)
  }
}

const handleOtpChange = (otp) => {
  isOtpComplete.value = otp.length === +props.OTPCount
  isSubmitting.value = isOtpComplete.value
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
        <appTimer :timeInSeconds="timeInSeconds" />
        <baseButton
          class="otp-form__submit-btn primary"
          :loading="isLoading"
          :disabled="isDisabled"
          :submitting="isSubmitting"
          @click="handleClick"
        >
          ارسال مجدد
          <template #submitting>ارسال</template>
          <template #loading> </template>
        </baseButton>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/sass/components/view/OTP/otp-form.scss';
</style>
