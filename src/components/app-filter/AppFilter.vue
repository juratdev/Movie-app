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
            name: 'popular',
          },
          {
            title: 'Most viewed movies',
            name: 'mostViewers',
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
  <PrimaryButton
    v-for="btn in filterButton"
    :key="btn.name" 
    @click="filterHandler(btn.name)"
    :class="[filterName === btn.name ? 'bg-zinc-900 text-white focus:bg-zinc-900' : 'bg-white, text-zinc-950']"
    class="ml-1">
    
    {{ btn.title }}
  </PrimaryButton>
 
</div>

</template>

<style scoped>

</style>