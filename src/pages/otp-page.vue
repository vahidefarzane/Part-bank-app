<script setup>
import otpForm from '@/components/view/OTP/otp-form.vue'
</script>

<template>
  <div class="container">
    <otpForm phoneNumber="09038407480" OTPCount="6" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/sass/pages/otp-page.scss';
</style>
