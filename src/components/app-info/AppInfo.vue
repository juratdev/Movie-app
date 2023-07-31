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
    },
  }
</script>

<template>
  <Box>
    <p class="pb-3 text-2xl uppercase">Number of all movies: {{ allMoviesCount }}</p>
    <p class="text-xl uppercase ">Number of movies watched: {{ favoriteMoviesCount }}</p>
  </Box>
</template>

<style scoped>

</style>