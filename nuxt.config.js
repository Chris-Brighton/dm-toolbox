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
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "DM's Toolbox - %s",
    title: "DM's Toolbox",
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
  css: [],

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
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://www.npmjs.com/package/@nuxtjs/dotenv
    ['@nuxtjs/dotenv', { systemvars: true }],

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://www.npmjs.com/package/vue2-editor
    'vue2-editor/nuxt',

    // https://www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.baseUrl || '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
}
