<script setup>
import { ref, reactive, onMounted, watch } from 'vue'

const props = defineProps({
  numberOfdigits: {
    type: Number,
    default: 6
  }
})
const emit = defineEmits(['otpChange'])

const otp = reactive(Array(props.numberOfdigits).fill(''))
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

  if (/^[1-9]$/.test(otp[index])) {
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

const pasteHandler = (event) => {
  const pasteData = event.clipboardData.getData('text').slice(0, props.numberOfdigits)
  pasteData.split('').forEach((char, index) => {
    if (/^[1-9]$/.test(char)) {
      otp[index] = char
    }
  })

  const nextIndex =
    pasteData.length < props.numberOfdigits ? pasteData.length : props.numberOfdigits - 1
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
      pattern="[1-9]*"
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
@import '@/styles/sass/components/view/otp-input.scss';
</style>
