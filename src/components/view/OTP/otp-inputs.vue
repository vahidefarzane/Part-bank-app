<script setup>
import { ref, reactive, onMounted, watch } from 'vue'

const props = defineProps({
  numberOfDigits: {
    type: Number,
    default: 6
  }
})
const emit = defineEmits(['otpChange'])

const otp = reactive(Array(props.numberOfDigits).fill(''))
const inputRefs = ref([])

const emitOtpChange = () => {
  emit('otpChange', otp.join(''))
}
const moveToFirstEmptyInput = () => {
  const firstEmptyIndex = otp.findIndex((digit) => digit === '')

  if (firstEmptyIndex !== -1) {
    inputRefs.value[firstEmptyIndex].focus()
  }
}
const arePreviousInputsFilled = (index) => {
  for (let i = 0; i < index; i++) {
    if (otp[i] === '') {
      return false
    }
  }
  return true
}

const inputHandler = (index) => {
  if (!arePreviousInputsFilled(index)) {
    otp[index] = ''
    moveToFirstEmptyInput()
    return
  }

  if (/^[0-9]$/.test(otp[index])) {
    emitOtpChange()
    moveToFirstEmptyInput()
  } else {
    otp[index] = ''
  }
}

const backspaceHandler = (index) => {
  if (otp[index] === '') {
    if (index > 0) {
      inputRefs.value[index - 1].focus()
    }
  }
  emitOtpChange()
}

const pasteHandler = () => {
  const pasteData = event.clipboardData.getData('text').slice(0, props.numberOfDigits)
  pasteData.split('').forEach((char, index) => {
    if (/^[0-9]$/.test(char)) {
      otp[index] = char
    }
  })

  const nextIndex = Math.min(pasteData.length, props.numberOfDigits - 1)
  inputRefs.value[nextIndex].focus()
  moveToFirstEmptyInput()
  emitOtpChange()
}

onMounted(() => {
  inputRefs.value[0].focus()
})
watch(otp, () => {
  emitOtpChange()
})
</script>

<template>
  <div class="otp-inputs-wrapper">
    <input
      v-for="(value, index) in otp"
      :key="index"
      type="text"
      maxlength="1"
      inputmode="numeric"
      pattern="[0-9]*"
      class="otp-input"
      :ref="(el) => (inputRefs[index] = el)"
      v-model="otp[index]"
      @input="inputHandler(index)"
      @keydown.backspace="backspaceHandler(index)"
      @paste="pasteHandler(event)"
    />
  </div>
</template>

<style lang="scss">
@import '@/styles/sass/components/view/OTP/otp-inputs.scss';
</style>
