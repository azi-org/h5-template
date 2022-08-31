import { defineStore } from 'pinia'

const useMainStore = defineStore('app', {
  state: () => {
    return {}
  },
  getters: {
    isIphoneX: () => {
      if (typeof window !== 'undefined' && window) {
        return (
          /iPhone/i.test(window.navigator.userAgent) &&
          window.screen.height >= 812
        )
      }
      return false
    },
    isIoS: () => {
      return /(iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent)
    },
    isAndroid: () => {
      return /android/i.test(window.navigator.userAgent)
    },
  },
  actions: {},
})

const store = useMainStore()

store.$subscribe((mutation, state) => {
  sessionStorage.setItem('app', JSON.stringify({ ...state }))
})

const value = sessionStorage.getItem('main-store')
if (value) {
  store.$state = JSON.parse(value)
}

export { useMainStore }
