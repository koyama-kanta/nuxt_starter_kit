import webpack from 'webpack'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const title = 'nuxt_starter_kit'
    const author = 'author'
    const keywords = 'keywords'
    const description = 'description'
    const siteName = 'siteName'
    const siteUrl = 'siteUrl'

    return {
      title,
      htmlAttrs: {
        lang: 'ja',
      },
      /* eslint-disable prettier/prettier */
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'author', name: 'author', content: author },
        { hid: 'keywords', name: 'keywords', content: keywords },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:site_name', name: 'og:site_name', content: siteName },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: siteUrl },
        { hid: 'og:image', name: 'og:image', content: `${siteUrl}/path_to_image/` },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:url', name: 'twitter:url', content: siteUrl },
        { hid: 'twitter:image', name: 'twitter:image', content: `${siteUrl}/path_to_image/` },
      ],
      /* eslint-enable prettier/prettier */
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Eslint module configuration
  eslint: {
    fix: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.baseUrl,
  },

  // StyleResources module configuration
  styleResources: {
    scss: [
      '~/assets/scss/foundation/variable.scss',
      '~/assets/scss/foundation/mixin.scss',
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: { grid: true },
        },
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
      }),
    ],
  },
}
