<template>
  <div class="flex-col">
    <!-- the form -->
    <div>
      <form
        @submit.prevent="writeToFirestore"
        class="rounded-xl flex shadow mx-auto mt-4 p-4 mb-2 space-x-2 max-w-md"
      >
        {{ today }}
        <textarea
          v-model="what"
          class="p-1 ml-3 shadow rounded"
          cols="40"
          row="2"
          placeholder="What did you do today ?"
          @keyup.enter="writeToFirestore"
        ></textarea>
        <input
          class="
            py-1
            px-3
            rounded
            shadow
            font-semibold
            text-white
            bg-green-500
            hover:bg-green-400
          "
          type="submit"
          value="Add"
        />
      </form>
    </div>
    <!-- list -->
    <div
      class="
        max-w-sm
        mx-auto
        bg-white
        rounded-xl
        shadow-md
        flex flex-initial
        mb-1
        w-md
      "
      v-for="(item, index) in journalEntries"
      :key="item.id"
      :index="index"
    >
      <!-- Here goes the list of done things -->
      <div class="w-14 p-6">
        <span class="text-gray-800">
          {{ $moment.unix(item.data.entry_date.seconds).format('DD/MM') }}</span
        >
        <div class="font-light text-gray-800 -mt-2">
          {{ $moment.unix(item.data.entry_date.seconds).format('YYYY') }}
        </div>
      </div>

      <div class="text-gray-800 flex-grow p-6">
        {{ item.data.entry }}
        <span v-if="edit === index">
          <textarea
            v-model="whatedit"
            class="p-2 border border-gray-200 rounded"
            cols="32"
          ></textarea>
        </span>
      </div>
      <div class="bg-pink-200 flex-grow-0 w-9 rounded-xl rounded-l-none p-2">
        <!-- {{ item.entry_type }} -->
        <a class="cursor-pointer" @click="deleteEntry(item.id, index)">
          <TrashIcon size="1.2x" class=""
        /></a>
        <a
          class="cursor-pointer"
          v-if="edit !== index"
          @click="
            edit = index
            whatedit = item.data.entry
          "
          ><PencilIcon size="1.2x" class=""
        /></a>
        <a class="cursor-pointer" v-if="edit === index" @click="edit = null"
          ><BanIcon size="1.2x" class="text-red-600 ring-red-600 mt-3"
        /></a>
        <a
          class="cursor-pointer"
          v-if="edit === index"
          @click="editEntry(item.id, index)"
          ><CheckIcon size="1.2x" class="text-green-600"
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
import {
  TrashIcon,
  PencilIcon,
  //  XCircleIcon,
  BanIcon,
  CheckIcon,
} from '@vue-hero-icons/outline'

export default {
  middleware: 'authenticated',
  components: {
    TrashIcon,
    PencilIcon,
    //  XCircleIcon,
    BanIcon,
    CheckIcon,
  },
  data() {
    return {
      what: null,
      whatedit: null,
      ndate: new Date(),
      undate: Math.round(new Date().getTime() / 1000),
      journalEntries: [],
      docEntries: [],
      edit: null, // gets the index for edition
    }
  },
  computed: {
    today() {
      return this.ndate.getDay() + '/' + this.ndate.getMonth()
    },
    year() {
      return this.ndate.getFullYear()
    },
    currentUser() {
      return this.$store.state.user
    },
  },
  methods: {
    async editEntry(id, index) {
      const journalRef = this.$fire.firestore
        .collection('users')
        .doc(this.currentUser.uid)
        .collection('journal')
      try {
        await journalRef.doc(id).update({
          entry: this.whatedit,
        })
        this.$toast.success('Entry edited.')
        this.edit = null
        this.journalEntries[index].data.entry = this.whatedit
      } catch (e) {
        this.$toast.error('Ooops, Could not delete this entry.')
      }
    },
    async deleteEntry(id, index) {
      const journalRef = this.$fire.firestore
        .collection('users')
        .doc(this.currentUser.uid)
        .collection('journal')
      try {
        await journalRef.doc(id).delete()
        this.journalEntries.splice(index, 1)
        this.$toast.success('Entry deleted.')
      } catch (e) {
        this.$toast.error('Ooops, Could not delete this entry.')
      }
    },
    async writeToFirestore() {
      const journalRef = this.$fire.firestore
        .collection('users')
        .doc(this.currentUser.uid)
        .collection('journal')
      // .doc('journal') // if add
      try {
        await journalRef.add({
          //   set to replace and add to add
          entry: this.what,
          entry_date: this.ndate,
          entry_type: 'work',
          uid: this.currentUser.uid,
        })
      } catch (e) {
        this.$toast.error('Ooops, something went wrong ...like...' + e)
        return
      }

      this.journalEntries.unshift({
        id: journalRef.id,
        data: {
          entry: this.what,
          entry_date: { seconds: Math.round(new Date().getTime() / 1000) },
          entry_type: 'work',
        },
      })

      console.log(Math.round(new Date().getTime() / 1000))

      this.$toast.success('Yeaaah, well done !')
      this.what = null
    },
    async readFromFirestore() {
      const journalRef = this.$fire.firestore
        .collection('users')
        .doc(this.currentUser.uid)
        .collection('journal')
      // .doc('journal')
      try {
        const snapshot = await journalRef.orderBy('entry_date', 'desc').get()
        //  const doc = snapshot.data() //  for one doc
        const doc = snapshot.docs.map((dd) => {
          return { id: dd.id, data: dd.data() }
        }) //   all collection
        //  const doc2 = snapshot.docs.map((doc) => doc)
        if (!doc) {
          this.$toast.error('Document not there !')
          return
        }
        this.journalEntries = doc
        // this.docEntries = doc2
        console.log(this.journalEntries)
      } catch (e) {
        this.$toast.error('Ooops, the app could not read a thing...' + e)
      }
    },
  }, //  methods
  mounted() {
    this.readFromFirestore()
  },
}
</script>
