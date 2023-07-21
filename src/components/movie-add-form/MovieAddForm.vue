<script>
  export default {

  }
</script>

<template>
  <div class="p-6 mt-8 rounded shadow-xl bg-orange-50">
    <h3 class="mb-3 text-xl">Add new movie</h3>
    <form class="flex max-sm:flex-col">
      <input type="text" class ="block w-full p-2 px-4 bg-white border rounded-md shadow-xl max-sm:w-96 border-slate-300 focus:outline-none focus:border-zinc-500 focus:ring-zinc-950 sm:text-sm focus:ring-1" placeholder="What kind of movie?" />
      <input type="text" class ="block w-full p-2 px-4 ml-4 bg-white border rounded-md shadow-xl max-sm:w-96 max-sm:ml-0 max-sm:mt-2 border-slate-300 focus:outline-none focus:border-zinc-500 focus:ring-zinc-950 sm:text-sm focus:ring-1" placeholder="Seen how many times?" />

      <button class="px-4 py-2 ml-4 font-bold text-white rounded max-sm:ml-0 max-sm:mt-2 max-sm:w-20 hover:bg-zinc-950 bg-zinc-900" type="submit">Add</button>
    </form>
  </div>
</template>

<style scoped>

</style>