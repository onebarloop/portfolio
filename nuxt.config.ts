// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss'
  },
  typescript: {
    strict: true,
    typeCheck: true
  }
})
