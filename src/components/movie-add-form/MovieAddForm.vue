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
        if (!this.name || !this.viewers) return;
        const newMovie = {
          name: this.name,
          viewers: this.viewers,
          favorite: false,
          like: false,
          id: Date.now(),
        }
        this.$emit("createMovie", newMovie)
        this.name = ""
        this.viewers = ""
      }
    }
   
  }
</script>

<template>
  <Box class="mt-8">
    <h3 class="mb-3 text-xl">Add new movie</h3>
    <form class="flex max-sm:flex-col" @submit.prevent>
      <Input
        class ="p-2 px-4 bg-white max-sm:w-96 border-slate-300 focus:outline-none focus:border-zinc-500 focus:ring-zinc-950 max-sm:text-base focus:ring-1"
        placeholder="What kind of movie?"
        v-model="name"
      />
      <Input
        class ="p-2 px-4 ml-4 bg-white max-sm:w-96 max-sm:ml-0 max-sm:mt-2 border-slate-300 focus:outline-none focus:border-zinc-500 focus:ring-zinc-950 max-sm:text-base focus:ring-1"
        placeholder="Seen how many times?"
        type="number"
        v-model="viewers"
      />

      <PrimaryButton class="ml-2 max-sm:ml-0 max-sm:mt-2 max-sm:w-20" type="submit" @click="addMovie">Add</PrimaryButton>
    </form>
  </Box>
</template>

<style scoped>

</style>