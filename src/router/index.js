import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/login-page.vue'
import OtpPage from '@/pages/otp-page.vue'
import CreateDepositAccountPage from '@/pages/create-deposit-account-page.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: CreateDepositAccountPage
    },
    {
      path: '/otp-page',
      component: OtpPage
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
})

export default router
