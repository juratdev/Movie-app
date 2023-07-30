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
            border: 'rounded-l-md',
          },
          {
            title: 'Popular movies',
            name: 'popular',
            border: 'rounded-none',
          },
          {
            title: 'Most viewed movies',
            name: 'mostViewers',
            border: 'rounded-r-md',
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
  
<div class="mt-4 rounded-md shadow-sm" role="group">
  <button
    v-for="btn in filterButton"
    :key="btn.name" 
    @click="filterHandler(btn.name)"
    :class="[filterName === btn.name ? 'bg-zinc-900 text-white focus:bg-zinc-900' : 'bg-white, text-zinc-950']
    [btn.border]"
    class="px-3 py-2 text-base font-medium transition duration-300 ease-in-out border border-zinc-900 hover:bg-zinc-950 hover:text-white ">
    
    {{ btn.title }}
  </button>
 
</div>

</template>

<style scoped>

</style>