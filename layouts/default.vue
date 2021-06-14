<template>
  <main class="bg-pink-200">
    <Nav class="bg-pink-200 z-20"></Nav>
    <div class="pt-6 rounded-3xl -mt- z-40 bg-white">
      <Nuxt />
    </div>
    <footer class="w-full text-center border-t border-grey p-4 pin-b">
      &copy; 2021 - <a href="" target="_blank">Fifteenpeas IT labs</a>
    </footer>
  </main>
</template>
<script>
import Nav from '~/components/Nav'
export default {
  components: {
    Nav,
  },
  methods: {
    LogOut() {
      localStorage.removeItem('token')
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
