<template>
  <div class="container">
    <form @submit="signIn" class="max-w-md mx-auto bg-white p-4 shadow rounded">
      <div class="relative mb-3">
        <span class="ml-2 bg-white px-2 absolute -top-3 text-sm">Email</span>
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
      <div>
        <button class="bg-gray-200 py-2 px-4 rounded" type="submit">
          Login
        </button>
        or signIn with <sign-in />
      </div>
    </form>
  </div>
</template>

<script>
import SignIn from '~/components/SignIn.vue'

export default {
  components: {
    SignIn,
  },
  data() {
    return {
      login: {},
    }
  },
  methods: {
    async signIn() {
      try {
        const { email, password } = this.login
        await this.$fireAuth.signInWithEmailAndPassword(email, password)
      } catch (error) {
        console.log(error)
        this.$toast.error(error)
      }
    },
  },
}
</script>
