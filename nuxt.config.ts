import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    "@assets": resolve(__dirname, './assets'),
    "@utils": resolve(__dirname, './utils'),
    "@constants": resolve(__dirname, './constants'),
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
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/css/tailwind.css', '~/assets/css/style.css'],
  app:{
    head: {
      title: 'aesthetic portfolio',
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        }
      ],
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})