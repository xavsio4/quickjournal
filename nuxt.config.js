export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // loading indicator
  loadingIndicator: {
    name: 'circle',
    color: '#FDD8E2',
    background: 'white',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'quickjournal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/custom.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/moment_filters.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-animejs',
  ],

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0,
      })
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done,
      })
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done,
      })
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    //https://github.com/nuxt-community/community-modules/tree/master/packages/toast
    '@nuxtjs/toast',
    '@nuxtjs/moment',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase',
    //'@nuxt/image',
  ], // modules

  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
    services: {
      firestore: true,
      auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          // onAuthStateChangedAction: 'onAuthStateChangedAction',
        },
        ssr: false, // default
      },
      storage: true,
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    // meta: false,
    meta: {
      mobileApp: true,
      // mobileAppIOS: true,
      // appleStatusBarStyle: 'default',
      description: 'Record your days easily',
      // nativeUI: true,
    },
    icon: false,
    manifest: {
      lang: 'en',
      name: 'QuickJournal',
      short_name: 'QuickJournal',
      display: 'standalone',
    },
    workbox: {
      importScripts: [
        // ...
        '/firebase-auth-sw.js',
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    },
  },

  //  Toast settings
  toast: {
    // position: 'top-center',
    duration: 1700,
    /*  register: [ // Register custom toasts
       {
         name: 'my-error',
         message: 'Oops...Something went wrong',
         options: {
           type: 'error'
         }
       }
    ] */
  },

  /* auth: {
    persistence: 'local', // default
    initialize: {
      onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
      onAuthStateChangedAction: 'onAuthStateChangedAction',
      subscribeManually: false,
    },
    ssr: false, // default
    emulatorPort: 9099,
    emulatorHost: 'http://localhost',
  }, */

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
