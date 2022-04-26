import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isCollapse: false
  }),
  getters: {},
  actions: {
    toggleIsCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
})
