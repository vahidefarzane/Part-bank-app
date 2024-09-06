import { httpInterceptedService } from '@/plugins/axios'

export default async function handelGetTransactions(url) {
  try {
    const response = await httpInterceptedService.get(url)
    return response
  } catch (error) {
    return error
  }
}
