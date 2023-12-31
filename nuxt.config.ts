// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'dark'
  },
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
    mailHost: process.env.NUXT_MAIL_HOST,
    mailPassword: process.env.NUXT_MAIL_PASSWORD,
    mailUser: process.env.NUXT_MAIL_USER,
    mailRecipient: process.env.NUXT_MAIL_RECIPIENT
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'My Portfolio Site',
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
})
