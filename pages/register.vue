<template>
  <!-- Container -->
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <!-- Row -->
      <div class="w-full xl:w-3/4 lg:w-11/12 md:w-11/12 flex">
        <!-- Col -->
        <div
          class="
            w-full
            h-auto
            bg-gray-400
            hidden
            lg:block lg:w-5/12
            bg-cover
            rounded-l-lg
          "
          style="
            background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');
          "
        ></div>
        <!-- Col -->
        <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 class="pt-4 text-2xl text-center">
            Create an Account with Google
          </h3>
          <sign-in />
          <!--  <h3 class="pt-4 text-2xl text-center">
            Create an Account with an email
          </h3>
          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                Email
              </label>
              <input
                class="
                  w-full
                  px-3
                  py-2
                  mb-3
                  text-sm
                  leading-tight
                  text-gray-700
                  border
                  rounded
                  shadow
                  appearance-none
                  focus:outline-none focus:shadow-outline
                "
                id="email"
                type="email"
                v-model="user.email"
                placeholder="Email"
              />
            </div>
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  v-model="user.password"
                  class="
                    w-full
                    px-3
                    py-2
                    mb-3
                    text-sm
                    leading-tight
                    text-gray-700
                    border border-red-500
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p class="text-xs italic text-red-500">
                  Please choose a password.
                </p>
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="c_password"
                >
                  Confirm Password
                </label>
                <input
                  class="
                    w-full
                    px-3
                    py-2
                    mb-3
                    text-sm
                    leading-tight
                    text-gray-700
                    border
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="c_password"
                  type="password"
                  placeholder="******************"
                />
              </div>
            </div>
            <div class="mb-6 text-center">
              <button
                @click="createUser"
                class="
                  w-full
                  px-4
                  py-2
                  font-bold
                  text-white
                  bg-blue-500
                  rounded-full
                  hover:bg-blue-700
                  focus:outline-none focus:shadow-outline
                "
                type="button"
              >
                Register Account
              </button>
            </div>
            <hr class="mb-6 border-t" />
            <div class="text-center">
              <a
                class="
                  inline-block
                  text-sm text-blue-500
                  align-baseline
                  hover:text-blue-800
                "
                href="/forgot"
              >
                Forgot Password?
              </a>
            </div>
            <div class="text-center">
              <a
                class="
                  inline-block
                  text-sm text-blue-500
                  align-baseline
                  hover:text-blue-800
                "
                href="/login"
              >
                Already have an account? Login!
              </a>
            </div>
          </form> -->
          <div class="text-left p-10 w-full">
            <h2 class="font-bold">
              Why don't you have any other choice to register ?
            </h2>
            <p class="text-xs">
              This is a free and totally experimental project. You will use the
              service without any support.
            </p>
            <p class="text-xs">
              So we didn't want any complicated scheme with emails and passwords
              and forms. It is then more simple and secure with a third party
              like Google.
            </p>
          </div>
        </div>
      </div>
    </div>
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
      user: {
        email: '',
        password: '',
      },
    }
  },
  middleware: 'authenticated',
  methods: {
    async createUser() {
      if (this.user.email && this.user.password) {
        try {
          await this.$fire.auth
            .createUserWithEmailAndPassword('foo@foo.foo', 'testtest')
            .then(() => {
              this.$toast.success('Yeaaaah, you are in !...waaaait for it...')
              this.$router.push('/journal')
            })
        } catch (e) {
          this.$toast.error(
            'Ooops, the registration did not work because of....' + e
          )
        }
      } else this.$toast.error('Hey, fill the form before anything.')
    },
  },
}
</script>
