<script setup>
import BaseButton from '@/components/common/base-button.vue'
import BaseInput from '@/components/common/base-input.vue'
import { Form } from 'vee-validate'
import { ref } from 'vue'
import { loginSchema } from '@/plugins/validations'

const formData = ref({
  phoneNumber: '',
  password: ''
})

const isLoading = ref(false)
const submit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>
<template>
  <div class="container">
    <div class="login-form">
      <div class="login-form__form-section">
        <div class="login-form__header">
          <img src="../assets/icons/logo.svg" alt="Logo" class="login-form__logo" />
          <div class="login-form__logo-text">
            <span class="login-form__logo-title">پارت بانک</span>
            <span class="login-form__logo-subtitle">تجربه‌ای نوین در بانک داری</span>
          </div>
        </div>
        <Form
          @submit="submit"
          :validationSchema="loginSchema"
          :initialValues="formData"
          class="login-form__body"
        >
          <BaseInput
            name="phoneNumber"
            label="شماره همراه"
            placeholder="مثلا ۰۹۱۲۳۴۵۶۷۸۹"
            labelStyle="login-form__label"
            inputStyle="login-form__input"
          />
          <BaseInput
            name="password"
            label="رمز عبور"
            placeholder="رمز عبور"
            labelStyle="login-form__label"
            inputStyle="login-form__input"
          >
            <template #suffix>
              <img src="../assets/icons/eye-closed.svg" alt="toggle-icon" />
            </template>
          </BaseInput>
          <BaseButton class="login-form__submit-btn primary" :loading="isLoading">
            ورود
            <template #loading>در حال ورود</template>
          </BaseButton>
        </Form>
        <div class="login-form__support-text">
          <span>پشتیبانی:</span>
          <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
        </div>
      </div>

      <div class="login-form__image-section">
        <div class="login-form__side-image"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @include flex-box(row, center, center);
  background: url(@/assets/images/bg-image.png) lightgray 0px -100px / 100% 118.519% no-repeat;
  height: 100vh;
}
.login-form {
  @include flex-box(row, space-between, center);
  width: 75rem;
  height: 52.5rem;
  background-color: var(--color-white);
  box-shadow: 0px 0px 4px 0px rgba(0, 67, 101, 0.05);
  &__header {
    @include flex-box(row, space-between, flex-end);
    color: var(--primary-500);
    margin-bottom: -11rem;
    margin-top: 5rem;
  }
  &__logo {
    width: 6rem;
    height: 5.75rem;
  }
  &__logo-text {
    @include flex-box(column, center, center);
  }
  &__logo-title {
    @include font-style(2.5rem, 700);
    line-height: 2rem;
  }
  &__logo-subtitle {
    line-height: 2rem;
  }
  &__body {
    @include flex-box(column, center);
    width: 22rem;
  }
  &__label {
    color: var(--black-500);
    padding: 0 0.5rem;
  }
  &__input {
    height: 3rem;
    background-color: var(--secondary-300);
    border-radius: 0.375rem;
    ::placeholder {
      color: var(--black-100);
      font-size: s 0.875rem;
    }
  }
  &__submit-btn {
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    height: 3rem;
    margin-top: 2rem;
  }
  &__support-text {
    @include flex-box(row, center, center, 0.25rem);
    color: var(--primary-500);
    font-size: 0.875rem;
  }
  &__form-section {
    width: 37.5rem;
    height: 52.5rem;
    @include flex-box(column, space-between, center);
    padding: 1.25rem 1.25rem 1.25rem 0;
  }
  &__image-section {
    @include flex-box(column, center, center);
    width: 37.5rem;
    height: 52.5rem;
    padding: 1.25rem;
  }
  &__side-image {
    border-radius: 0.75rem;
    background: url(../assets/images/side-login-image.jpeg) lightgray 50% / cover no-repeat;
    width: 35rem;
    height: 50rem;
    border-radius: 0.75rem;
  }
}
</style>
