// UI - باید زود تر همه لود بشه
import { defineNuxtPlugin } from '#app'
import { defineNuxtPlugin as initPilotUI } from 'pilotui/nuxt'

export default defineNuxtPlugin({
  name: 'pilotui',
  enforce: 'pre',
  setup(nuxtApp) {
    return initPilotUI(nuxtApp, {
      prefix: 'CL',
      theme: 'light',
      rtlClass: 'rtl',
      dontInstallPinia: false,
      dontInstallPopper: false,
      dontInstallPerfectScrollbar: false
    })
  }
})
