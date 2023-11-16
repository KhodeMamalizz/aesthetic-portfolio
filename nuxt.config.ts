export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    "@assets": "<rootDir>/assets",
    "@utils": "<rootDir>/utils"
  },
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Inter: true,
          Cursive: true
        },
        display: 'swap'
    }],
    '@vueuse/motion/nuxt',
    '@nuxt/image'
  ],
  css: ['~/assets/css/tailwind.css', '~/assets/css/style.css'],
  app:{
    head: {
      title: 'aesthetic portfolio'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})