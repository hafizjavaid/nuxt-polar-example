// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@vueuse/nuxt',
    '@polar-sh/nuxt',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt Templates',
      titleTemplate: '%s - Nuxt Templates',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'system',
  },
  runtimeConfig: {
    public: {
      baseUrl: '',
    },
    polarToken: '',
    polarServer: '',
    polarWebhookSecret: '',
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  typescript: {
    strict: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
