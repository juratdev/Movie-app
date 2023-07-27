<script>
  export default {
    props: {
      allMoviesCount: {
        type: Number,
        required: true
      },
      favoriteMoviesCount: {
        type: Number,
        required: true
      }
    }
  }
</script>

<template>
  <div class="p-6 rounded shadow-xl bg-orange-50">
    <p class="pb-3 text-2xl uppercase">Number of all movies: {{ allMoviesCount }}</p>
    <p class="text-xl uppercase ">Number of movies watched: {{ favoriteMoviesCount }}</p>
  </div>
</template>

<style scoped>

</style>