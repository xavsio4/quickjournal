<template>
  <div>
    <div class="w-full lg:w-2/3">
      <a class="block rounded w-full lg:flex mb-10"></a>
      <div
        class="
          h-48
          lg:w-48
          flex-none
          bg-cover
          text-center
          overflow-hidden
          opacity-75
        "
        style="backgroundimage: 'url(https://dummyimage.com/720x400/)'"
      ></div>
      <div
        class="
          bg-white
          rounded
          px-4
          py-4
          flex flex-col
          justify-between
          leading-normal
          shadow
        "
      >
        <div>
          <div class="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
            {{ item.data.entry }}
          </div>
        </div>
        <div class="flex mt-3">
          <div>
            <p class="font-semibold text-gray-700 text-sm capitalize">
              {{ $moment.unix(item.data.entry_date.seconds).format('DD/MM') }}
            </p>
            <p class="text-gray-600 text-xs">
              {{ $moment.unix(item.data.entry_date.seconds).format('YYYY') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { item: Object },
}
</script>
