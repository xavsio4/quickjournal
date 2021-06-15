<template>
  <div>
    <p>
      As part of privacy by design you can hereby totally remove your account
      from QuickJournal.
    </p>
    <p class="text-red">
      In doing so you will irrevocably delete all your entries in QuickJournal,
      and your user will be removed.
    </p>
    <p class="text-red">It will be like you've never been here before</p>
    <button @click="account_destroy">
      Destroy irrevocably my account on QuickJournal
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    account_destroy() {
      //
    },
  },
}
</script>
