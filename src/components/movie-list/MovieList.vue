<script>
import MovieListItem from '../movie-list-item/MovieListItem.vue'
  export default {
    components: {
      MovieListItem
    },
    data() {
      return {
        movies: [
          {
            name: "Omar",
            viewers: 811,
            favorite: false,
            like: true,
          },
          {
            name: "Empire of osman",
            viewers: 415,
            favorite: false,
            like: false,
          },
          {
            name: "Ertugrul",
            viewers: 708,
            favorite: true,
            like: false,
          },
        ]
      }
    },
  }
</script>

<template>
<ul class="p-6 mt-8 list-disc list-inside rounded shadow-xl bg-orange-50 " role="list">
  <MovieListItem v-for="movie in movies" v-bind:movie="movie" />
</ul>
</template>

<style scoped>

</style>