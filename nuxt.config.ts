export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Inter: true
        },
        display: 'swap'
    }],
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