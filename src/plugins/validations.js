import * as yup from 'yup'

const phoneNubmerRules = yup
  .string()
  .required('شماره همراه الزامی است')
  .matches(/^09\d*$/, 'فرمت ورودی صحیح نیست')
  .min(11, 'لطفا شماره همراه را کامل وارد کنید')
  .max(11, 'شماره همراه باید 11 رقم باشد')
const passwordRules = yup
  .string()
  .required('رمز عبور الزامی است')
  .min(8, 'رمز عبور باید 8 رقم باشد')
  .max(8, 'رمز عبور باید 8 رقم باشد')

const firstNameRules = yup
  .string()
  .required('وارد کردن نام الزامی است')
  .min(8, 'نام باید حداقل 3 حرفی باشد')
const lastNameRules = yup
  .string()
  .required('وارد کردن نام خانوادگی الزامی است')
  .min(8, 'نام خانوادگی باید حداقل 3 حرفی باشد')

const postalCodeRules = yup
  .string()
  .required('وارد کردن کد پستی الزامی است')
  .min(10, 'کد پستی باید 10 رقمی باشد')
  .max(10, 'کد پستی باید 10 رقمی باشد')
const addressRules = yup.string().required('وارد کردن آدرس محل سکونت الزامی است')

export const loginSchema = {
  phoneNumber: phoneNubmerRules,
  password: passwordRules
}

export const creationDepositAcountSchema = {
  firstName: firstNameRules,
  lastName: lastNameRules,
  postalCode: postalCodeRules,
  address: addressRules
}
