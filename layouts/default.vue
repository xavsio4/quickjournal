<template>
  <main class="bg-pink-200">
    <Nav class="bg-pink-200"></Nav>
    <div class="pt-6 rounded-3xl bg-white pb-6">
      <Nuxt />
    </div>
    <footer class="w-full text-center p-4 pin-b">
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
}
</script>

<style></style>
