<script setup>
import BaseInput from '@/components/common/base-input.vue'
import baseButton from '@/components/common/base-button.vue'
import createDepositAccountWrapper from '@/components/common/create-deposit-account-wrapper.vue'
import { Form } from 'vee-validate'
import { creationDepositAcountSchema } from '@/plugins/validations'
import BaseTextarea from '@/components/view/base-textarea.vue'

const submit = (values) => {
  console.log(values)
}
</script>

<template>
  <div>
    <createDepositAccountWrapper
      title="اطلاعات فردی"
      primaryBtnContent="ثبت و ادامه"
      secondaryBtnContent="قبلی"
    >
      <Form
        @submit="submit"
        :validationSchema="creationDepositAcountSchema"
        class="create-deposit-form deposit-form"
      >
        <div class="deposit-form__group">
          <BaseInput
            name="firstName"
            label="نام"
            placeholder="نام فارسی"
            class="deposit-form__field"
            labelStyle="deposit-form__label"
            inputStyle="deposit-form__input"
            onkeyPress="return /[آ-ی\s]/i.test(event.key)"
          />
          <BaseInput
            name="lastName"
            label="نام خانوادگی"
            placeholder="نام خانوادگی به صورت کامل"
            class="deposit-form__field"
            labelStyle="deposit-form__label"
            inputStyle="deposit-form__input"
            onkeyPress="return /[آ-ی\s]/i.test(event.key)"
          >
          </BaseInput>
          <BaseInput
            name="postalCode"
            label="کدپستی"
            placeholder="کدپستی"
            class="deposit-form__field"
            labelStyle="deposit-form__label"
            inputStyle="deposit-form__input"
            onkeyPress="return /[0-9\s]/i.test(event.key)"
          >
          </BaseInput>
        </div>
        <div class="deposit-form__group">
          <BaseTextarea
            name="address"
            label="محل سکونت"
            placeholder="آدرس محل سکونت"
            class="deposit-form__textarea-field"
            labelStyle="deposit-form__label"
            textareaStyle="deposit-form__textarea"
            rows="6"
          />
        </div>
        <div class="deposit-form__nav">
          <baseButton type="submit" class="deposit-form__nav-btn secondary">قبلی</baseButton>
          <baseButton class="deposit-form__nav-btn primary">ثبت و ادامه</baseButton>
        </div>
      </Form>
    </createDepositAccountWrapper>
  </div>
</template>

<style lang="scss">
.create-deposit-form {
  @include flex-box(column, flex-start, null, 1rem);
}
.deposit-form {
  &__group {
    @include flex-box(row, null, null, 2rem);
    flex-wrap: wrap;
  }
  &__field {
    width: 25rem;
    flex: 1;
  }
  &__textarea-field {
    flex: 1;
  }
  &__textarea {
    background: var(--secondary-300);
    border: 1px solid var(--black-50) ;
    border-radius: 0.375rem;
    flex: 1;
    ::placeholder {
      color: var(--black-100);
      font-size: 0.875rem;
    }
  }

  &__label {
    @include font-style(0.875rem, 500);
    color: var(--secondary-200);
  }
  &__input {
    background: var(--secondary-300);
    border: 1px solid var(--black-50) !important;
    border-radius: 0.375rem;
    height: 3rem;
    ::placeholder {
      color: var(--black-100);
      font-size: 0.875rem;
    }
  }
  &__nav {
    @include flex-box(row, flex-end, center, 1rem);
    margin-top: 2rem;
    &-btn {
      @include font-style(1rem, 400);
      width: 13rem;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      height: 3rem;
    }
  }
}
</style>
