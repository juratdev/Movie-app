<script>
  export default {
    data() {
      return {
        term: "",
      }
    },
    methods: {
      changeHandler(e) {
        this.term = e.target.value
        this.updateTermHandler(this.term)
      }
    },
    props: {
      updateTermHandler: {
        type: Function,
        required: true,
      }
    },
  }
</script>

<template>
  <Input
    v-model="term"
    @input="changeHandler"
    class ="p-5 text-lg font-medium bg-white border-slate-300 focus:outline-none focus:border-zinc-500 focus:ring-zinc-950 max-sm:text-sm focus:ring-1"
    placeholder="Search movies"
  />
</template>

<style scoped>

</style>