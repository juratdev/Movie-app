<script>
  export default {
    props: {
      updateFilterHandler: {
        type: Function,
        required: true,
      },
      filterName: {
        type: String,
        required: true,
      }
    },
    data() {
      return {
        filterButton: [
          {
            title: 'All movies',
            name: 'all',
          },
          {
            title: 'Popular movies',
            name: 'all',
          },
          {
            title: 'Most viewed movies',
            name: 'all',
          },
        ],

        filter: "all",
      }
    },
    methods: {
      filterHandler(filter) {
        this.filter = filter
        this.updateFilterHandler(this.filter)
      }
    },
   
  }
</script>

<template>
  
<div class="inline-flex mt-4 rounded-md shadow-sm" role="group">
  <button 
    @click="filterHandler('all')"
    :class="[filterName === 'all' ? 'bg-zinc-900 text-white focus:bg-zinc-900' : 'text-zinc-950']" 
    type="button"
    class="px-3 py-2 text-base font-medium transition duration-300 ease-in-out border border-zinc-900 hover:bg-zinc-950 hover:text-white rounded-l-md ">
    All movies
  </button>
  <button
   @click="filterHandler('popular')" 
   :class="[filterName === 'popular' ? 'bg-zinc-900 text-white focus:bg-zinc-900' : 'bg-white, text-zinc-950']" 
   type="button" 
   class="px-3 py-2 text-base font-medium transition duration-300 ease-in-out border border-zinc-900 hover:bg-zinc-950 hover:text-white ">
    Popular movies
  </button>
  <button @click="filterHandler('mostViewers')"
  :class="[filterName === 'mostViewers' ? 'bg-zinc-900 text-white focus:bg-zinc-900' : 'bg-white, text-zinc-950']" 
   type="button" 
   class="px-3 py-2 text-base font-medium transition duration-300 ease-in-out border border-zinc-900 rounded-r-md hover:bg-zinc-950 hover:text-white">
    Most viewed movies
  </button>
</div>

</template>

<style scoped>

</style>