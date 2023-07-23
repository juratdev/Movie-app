<script>
import MovieListItem from '../movie-list-item/MovieListItem.vue'
  export default {
    components: {
      MovieListItem
    }
  }
</script>

<template>
<ul class="p-6 mt-8 list-disc list-inside rounded shadow-xl bg-orange-50 " role="list">
  <MovieListItem />
  <MovieListItem />
  <MovieListItem />
</ul>
</template>

<style scoped>

</style>