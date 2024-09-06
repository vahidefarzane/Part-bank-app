import { defineStore } from 'pinia'
import handelGetTransactions from '@/services/transaction/handleTransactions'

export const useTransActionsStore = defineStore('transactions', {
  state: () => ({
    transList: []
  }),
  actions: {
    async get(url) {
      const transactionList = await handelGetTransactions(url)      
      this.transList = transactionList.results
      
    }
  },
  persist: {
    enabled: true,
    key: 'transactions',
    Storage: localStorage
  }
})
