<template>
  <nav class="flex items-center justify-between flex-wrap bg-pink-200 p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <NuxtLink to="/">
        <svg
          class="h-10 w-17 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 356.52174 61.73913"
          v-anime="{
            rotate: 360,
            duration: 1500,
            loop: false,
            delay: 1500,
          }"
        >
          <defs>
            <style>
              .e031dedf-9a3d-458c-abdd-7963735826fc {
                fill: #fff27b;
              }
              .e5361adc-9bc3-44ab-980c-5643b5c1f5f6 {
                font-size: 47.04035px;
                fill: #8ab6c1;
                font-family: Gastromond-Regular, Gastromond;
              }
            </style>
          </defs>
          <g id="fe927b13-0736-45de-aa7e-f51baa4e6eb4" data-name="Layer 2">
            <g id="adf3534c-50c4-4366-840a-e6cc5c8bb042" data-name="Layer 1">
              <rect
                class="e031dedf-9a3d-458c-abdd-7963735826fc"
                width="356.52174"
                height="61.73913"
                rx="18.15742"
              />
              <text
                class="e5361adc-9bc3-44ab-980c-5643b5c1f5f6"
                transform="translate(5.21816 46.07116)"
              >
                QuickJournal
              </text>
            </g>
          </g>
        </svg>
      </NuxtLink>
      <span class="font-semibold text-xl tracking-tight"></span>
    </div>
    <div class="block sm:hidden">
      <button
        @click="toggle"
        class="
          flex
          items-center
          px-3
          py-2
          border
          rounded
          text-teal-lighter
          border-teal-light
          hover:text-white hover:border-white
        "
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="open ? 'block' : 'hidden'"
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
    >
      <div class="text-sm sm:flex-grow">
        <NuxtLink
          to="/about"
          class="
            no-underline
            block
            mt-4
            sm:inline-block sm:mt-0
            text-teal-lighter
            hover:text-white
            mr-4
          "
        >
          About
        </NuxtLink>
        <NuxtLink
          v-if="currentUser !== false"
          to="/journal"
          class="
            no-underline
            block
            mt-4
            sm:inline-block sm:mt-0
            text-teal-lighter
            hover:text-white
            mr-4
          "
          >your journal</NuxtLink
        >
        <NuxtLink
          v-if="!currentUser"
          to="/register"
          class="
            no-underline
            block
            mt-4
            sm:inline-block sm:mt-0
            text-teal-lighter
            hover:text-white
            mr-4
          "
        >
          Register
        </NuxtLink>
        <a
          v-if="currentUser"
          @click="signOut"
          class="
            cursor-pointer
            inline-block
            px-4
            py-2
            border
            rounded
            no-underline
            block
            mt-4
            sm:inline-block sm:mt-0
            hover:text-white hover:border-white
          "
        >
          Signout
        </a>
      </div>
      <div>
        <NuxtLink
          v-if="currentUser === false"
          to="/login"
          class="
            no-underline
            inline-block
            text-sm
            px-4
            py-2
            leading-none
            border
            rounded
            hover:border-white hover:text-white
            mt-4
            sm:mt-0
          "
          >Login</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user
    },
  },
  methods: {
    signOut() {
      this.$toast.success('Ok Bye !')
      this.$fire.auth.signOut()
      this.$router.push('/')
    },
    toggle() {
      this.open = !this.open
    },
  },
}
</script>
<style>
.nuxt-link-active {
  font-weight: bolder;
  text-decoration: underline;
  color: white;
}
</style>
