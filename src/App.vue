<script>
  import AppInfo from '@/components/app-info/AppInfo.vue';
  import SearchPanel from '@/components/search-panel/SearchPanel.vue';
  import AppFilter from '@/components/app-filter/AppFilter.vue';
  import MovieList from '@/components/movie-list/MovieList.vue';
  import MovieAddForm from '@/components/movie-add-form/MovieAddForm.vue';
  export default {
    components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm
},
  }
</script>

<template>
  <div class="h-screen text-black">
    <div class="w-[62.5rem] min-[43.75rem] bg-white mt-10 m-auto py-20">
      <AppInfo />
      <div class="p-6 mt-8 rounded shadow-xl bg-orange-50">
        <SearchPanel />
        <AppFilter />
      </div>
      <MovieList />
      <MovieAddForm />
    </div>
  </div>
</template>

<style scoped>

</style>