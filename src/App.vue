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
        name: "Spider-Man",
        viewers: 811,
        favorite: false,
        like: true,
        id: 1,
      },
      {
        name: "Terminator",
        viewers: 415,
        favorite: false,
        like: false,
        id: 2,
      },
      {
        name: "Sherlock Jr",
        viewers: 708,
        favorite: true,
        like: false,
        id: 3,
      },
    ],
    term: "",
    filter: "all",
  }
},
methods: {
  createMovie(item) {
    this.movies.push(item)
  },
  onToggleHandler({id, prop}) {
   
    this.movies = this.movies.map(item => {
      if (item.id == id) {
        return {...item, [prop]: !item[prop]}
      }
      return item
    })
  },
  onRemoveHandler(id) {
    this.movies = this.movies.filter(c => c.id != id)
  },
  onSearchHandler(arr, term) {
    if(term.length == 0) {
      return arr
    }
    return arr.filter(c => c.name.toLowerCase().indexOf(term) > -1)
  },
  onFilterHandler(arr, filter) {
    switch (filter) {
      case "popular":
        return arr.filter(c => c.like)
        break;
      case "mostViewers":
        return arr.filter(c => c.viewers > 500)
        break;
      default:
        return arr
        break;
    }
  },
  updateTermHandler(term) {
    this.term = term
  },
  updateFilterHandler(filter) {
    this.filter = filter
  }

},

}
</script>

<template>
  <div class="h-screen font-mono text-black">
    <div class="w-[62.5rem] min-[43.75rem] bg-white m-auto py-16">
      <AppInfo :allMoviesCount="movies.length" :favoriteMoviesCount="movies.filter(c => c.favorite).length" />
      <div class="p-6 mt-8 rounded shadow-xl bg-orange-50">
        <SearchPanel :updateTermHandler="updateTermHandler"/>
        <AppFilter :updateFilterHandler="updateFilterHandler" :filterName="filter"/>
      </div>
      <MovieList :movies="onFilterHandler(onSearchHandler(movies, term), filter)" @onToggle="onToggleHandler" @onRemove="onRemoveHandler" />
      <MovieAddForm @createMovie="createMovie" />
    </div>
  </div>
</template>

<style scoped>

</style>