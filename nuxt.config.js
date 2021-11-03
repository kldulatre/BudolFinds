export default {
  ssr: false,

  head: {
    title: 'BudolFinds',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  css: [
  ],


  plugins: [
  ],


  components: true,


  buildModules: [
    // '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],


  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDXfRWySdQaExtaUytovTvr63m_dGmJL9w",
          authDomain: "budolfinds-8acf4.firebaseapp.com",
          projectId: "budolfinds-8acf4",
          storageBucket: "budolfinds-8acf4.appspot.com",
          messagingSenderId: "590078983820",
          appId: "1:590078983820:web:612dc0d0424abf1b5ac5a9",
          measurementId: "G-6FQBNZC4WS"
        },
        services: {
          auth: {
            persistence: 'local',
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false,
          }
        }
      }
    ],
  ],


  axios: {},


  pwa: {
    manifest: {
      lang: 'en'
    }
  },


  build: {
  }
}
