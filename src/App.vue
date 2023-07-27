<script>
  import AppInfo from './components/app-info/AppInfo.vue';
  import SearchPanel from './components/search-panel/SearchPanel.vue';
  import AppFilter from './components/app-filter/AppFilter.vue';
  import MovieList from './components/movie-list/MovieList.vue';
  import MovieAddForm from './components/movie-add-form/MovieAddForm.vue';
  export default {
    components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm
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
  <div class="h-screen font-mono text-black">
    <div class="w-[62.5rem] min-[43.75rem] bg-white m-auto py-16">
      <AppInfo :allMoviesCount="movies.length" :favoriteMoviesCount="movies.filter(c => c.favorite).length" />
      <div class="p-6 mt-8 rounded shadow-xl bg-orange-50">
        <SearchPanel />
        <AppFilter />
      </div>
      <MovieList :movies="movies" />
      <MovieAddForm />
    </div>
  </div>
</template>

<style scoped>

</style>