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
<Box class="mt-8">
  <MovieListItem v-for="movie in movies" v-bind:movie="movie" :key="movie.id" @onLike="$emit('onLike', movie.id)" @onToggle="$emit('onToggle', $event)" @onRemove="$emit('onRemove', $event)" />
</Box>
</template>

<style scoped>

</style>