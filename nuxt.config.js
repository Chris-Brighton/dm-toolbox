import colors from 'vuetify/es5/util/colors'

const theme = {
  primary: colors.deepOrange.base,
  secondary: colors.deepPurple.base,
  accent: colors.teal.base,
  info: colors.blue.lighten1,
  warning: colors.amber.base,
  error: colors.red.accent3,
  success: colors.green.base,
}

export default {
  target: 'static',
  router: {
    base: '/<repository-name>/',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - dnd-dm-helper',
    title: 'dnd-dm-helper',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/overrides.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/capitalize.js',
    '~plugins/queryString.js',
    '~/plugins/service.js',
    '~plugins/groupBy.js',
    '~plugins/slug.js',
    '~plugins/getStats.js',
  ],

  serverMiddleware: ['~/server/index.js'],
  watch: ['server'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/vue2-editor
    'vue2-editor/nuxt',
    // https://www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.baseURL || 'http://localhost:3000/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customProperties: false,
    theme: {
      dark: true,
      themes: {
        dark: theme,
        light: theme,
      },
    },
  },

  toast: {
    position: 'top-right',
    duration: 1000,
    singleton: true,
    className: 'toast-box',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
}
