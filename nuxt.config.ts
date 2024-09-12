// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  devtools: {
    enabled: true,
    timeline: {
    enabled: true
  }
},
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    "@tailwindcss/typography",
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }

  },
  colorMode: {
    classSuffix: '',
  },
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
  routeRules: {
    '/blog': { prerender: true }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
});
