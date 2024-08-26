import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/login-page.vue'
import OtpPage from '@/pages/otp-page.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: OtpPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    
  ]
})

export default router
