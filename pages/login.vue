<template>
  <div class="container flex flex-col p-6">
    <h2 class="text-xl">Login</h2>
    <form class="max-w-md mx-auto bg-white p-4 shadow rounded" @submit="loginm">
      <div class="mb-3">
        <!--  <span class="ml-2 bg-white px-2 absolute -top-3 text-sm">Email</span>
        <input
          class="transition duration-500 border h-12 rounded w-full px-2 mb-2"
          type="text"
          v-model="login.email"
        />
      </div>
      <div class="relative mb-1">
        <label class="ml-2 bg-white px-2 absolute -top-3 text-sm"
          >Password</label
        >
        <input
          class="transition duration-500 border h-12 rounded w-full px-2 mb-2"
          type="text"
          v-model="login.password"
        />
      </div>
      <div class="flex flex-column mb-3">
        <a
          href="#"
          class="
            cursor-pointer
            text-sm text-blue-500
            align-baseline
            hover:text-blue-800
          "
          >Forgot password?</a
        >

        <a
          class="
            text-right
            cursor-pointer
            inline-block
            text-sm text-blue-500
            align-baseline
            hover:text-blue-800
          "
          href="/register"
        >
          Don't have an account yet ?
        </a>
      </div>
      <div> -->
        <!--  <button class="bg-gray-200 py-2 px-4 rounded" type="submit">
          Login
        </button> -->
        <client-only><sign-in /></client-only>
      </div>
    </form>
    <div class="text-left p-10 w-full">
      <h2 class="font-bold">Why don't you have any other choice to login ?</h2>
      <p class="text-xs">
        This is a free and totally experimental project. You will use the
        service without any support.
      </p>
      <p class="text-xs">
        So we didn't want any complicated scheme with emails and passwords and
        forms. It is then more simple and secure with a third party like Google.
      </p>
      <br />
      <p>Get access with another device</p>
      <br />
      <nuxt-img src="/qrcode.png" width="80" />
    </div>
  </div>
</template>

<script>
import SignIn from '~/components/SignIn.vue'

export default {
  components: {
    SignIn,
  },
  middleware: 'authenticated',
  data() {
    return {
      login: {},
    }
  },
  methods: {
    async loginm() {
      try {
        const { email, password } = this.login
        await this.$fireAuth
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            this.$toast.success('Yeaaaah, you are in !...waaaait for it...')
            this.$router.push('/journal')
          })
      } catch (error) {
        console.log(error)
        this.$toast.error(error)
      }
    },
  },
}
</script>
