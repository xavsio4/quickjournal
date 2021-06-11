<template>
  <div class="container">
    <div>
      <Logo />
      <h1>
        Welcome <span v-if="currentUser">{{ currentUser.displayName }}</span>
      </h1>
      <sign-in />
      <div v-if="currentUser">
        <button type="button" class="btn btn-primary" @click="signOut">
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from '~/components/SignIn.vue'

export default {
  computed: {
    currentUser() {
      return this.$store.state.user
    },
  },
  methods: {
    signOut() {
      console.log('signOut')
      this.$fire.auth.signOut()
    },
  },
  components: {
    SignIn,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
