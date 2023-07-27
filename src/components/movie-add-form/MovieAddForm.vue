<script>
  export default {
    data() {
      return {
        name: "",
        viewers: "",
      }
    },
    methods: {
      addMovie() {
        const newMovie = {
          name: this.name,
          viewers: this.viewers,
          favorite: false,
          like: false,
        }
        console.log(newMovie);
      }
    }
   
  }
</script>

<template>
  <div class="p-6 mt-8 rounded shadow-xl bg-orange-50">
    <h3 class="mb-3 text-xl">Add new movie</h3>
    <form class="flex max-sm:flex-col" @submit.prevent>
      <input type="text" class ="block w-full p-2 px-4 bg-white border rounded-md shadow-xl max-sm:w-96 border-slate-300 focus:outline-none focus:border-zinc-500 focus:ring-zinc-950 max-sm:text-base focus:ring-1" placeholder="What kind of movie?" :value="name" @input="name = $event.target.value" />
      <input type="number" class ="block w-full p-2 px-4 ml-4 bg-white border rounded-md shadow-xl max-sm:w-96 max-sm:ml-0 max-sm:mt-2 border-slate-300 focus:outline-none focus:border-zinc-500 focus:ring-zinc-950 max-sm:text-base focus:ring-1" placeholder="Seen how many times?" :value="viewers" @input="viewers = $event.target.value" />

      <button class="px-4 py-2 ml-4 font-bold text-white rounded max-sm:ml-0 max-sm:mt-2 max-sm:w-20 hover:bg-zinc-950 bg-zinc-900" type="submit" @click="addMovie">Add</button>
    </form>
  </div>
</template>

<style scoped>

</style>