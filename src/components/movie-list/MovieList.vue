<script>
import MovieListItem from '../movie-list-item/MovieListItem.vue'
  export default {
    components: {
      MovieListItem
    },
    props: {
      movies: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<template>
<ul class="p-6 mt-8 list-disc list-inside rounded shadow-xl bg-orange-50 " role="list">
  <MovieListItem v-for="movie in movies" v-bind:movie="movie" :key="movie.id" @onLike="$emit('onLike', movie.id)" @onToggle="$emit('onToggle', $event)" />
</ul>
</template>

<style scoped>

</style>