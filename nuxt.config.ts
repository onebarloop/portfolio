// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@nuxt/ui'],
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss'
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  runtimeConfig: {
    mailHost: '',
    mailPassword: '',
    mailUser: '',
    mailRecipient: ''
  }
})
