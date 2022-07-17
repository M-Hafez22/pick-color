import { defineStore } from 'pinia'


export const useColorStore = defineStore({
  id: 'color',
  state: () => ({
    color: {
      text: '#e7e7e7',
      background: '#04161f',
      accent: '#0ec094'
    }
  }),
  actions: {
    changeTextColor(clr) {
      this.color.text = clr
    },
    changeBgColor(clr) {
      this.color.background = clr
    },
    changeAccentColor(clr) {
      this.color.accent = clr
    }
  }
})
