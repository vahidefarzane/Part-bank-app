import axios from 'axios'

const baseURL = 'https://college.apipart.ir/'
export const httpInterceptedService = axios.create({
  baseURL,
  headers: {
    'gateway-system': 'turboFront'
  }
})

httpInterceptedService.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['gateway-token'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
httpInterceptedService.interceptors.response.use(
  (response) => {
    return response.data.data
  },
  (error) => {
    
    // if (error.response.status === 404) {
    //   showToast('لطفا اطلاعات صحیح را وارد کنید', 'error')
    // }
    // if (error.response.status === 400) {
    //   showToast(error.message, 'error')
    // }
    return Promise.reject(error)
  }
)
