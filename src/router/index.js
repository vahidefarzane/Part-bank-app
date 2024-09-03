import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/login-page.vue'
import OtpPage from '@/pages/otp-page.vue'
import dashboardLayout from '@/layouts/dashboard-layout.vue'
import mainLayout from '@/layouts/main-layout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/otp-page',
      component: OtpPage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      meta: {
        title: 'پارت بانک | ورود',
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'Account',
      component: mainLayout,
    
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: dashboardLayout,
          meta: {
            title: 'پارت بانک | داشبورد',
            requiresAuth: true
          },
          children: [
            {
              path: '/',
              name: 'Home',
              meta: {
                title: 'داشبورد | صفحه اصلی',
                requiresAuth: true
              },
              component: () => import('@/pages/dashboard-page.vue')
            }
          ]
        },
        {
          path: '/create-deposit-account',
          name: 'CreateDepositAccountPage',
          component: () => import('@/pages/create-deposit-account-page.vue'),
          meta: {
            title: 'پارت بانک | اطلاعات فردی',
            requiresAuth: true
          }
        },
        {
          path: '/file-uploader',
          name: 'FileUploader',
          component: () => import('@/pages/file-uploader-page.vue'),
          meta: {
            title: 'پارت بانک | بارگزاری فایل',
            requiresAuth: true
          }
        },
        {
          path: '/review-info',
          name: 'ReviewInfo',
          component: () => import('@/pages/review-info-page.vue'),
          meta: {
            title: 'پارت بانک | تایید اطلاعات',
            requiresAuth: true
          }
        }
      ]
    }
  ]
})
// router.beforeEach((to, from, next) => {
  // const token = localStorage.getItem('token');
  // if (!token && to.name !== 'Login') {
  //   next({ name: 'Login' });
  // } else {
  //   next();
  // }
  // if (to.meta.title) {
  //   document.title = to.meta.title;
  // }
// });
export default router
