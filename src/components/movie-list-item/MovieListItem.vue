<script>
  export default {
    props: {
      movie: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<template>
  <li class="flex justify-between px-4 py-3 list-none border-b border-gray-500 rounded-t-lg list-group-item "
      :class="[{like: movie.like},{favorite: movie.favorite}]"
  >
    <span class="text-2xl cursor-pointer w-[34.375rem] list-group-item-label">{{movie.name}}</span>
    <input type="number" class="w-48 text-2xl text-center border-0 outline-none list-group-item-input" v-bind:value="movie.viewers">

    <div class="flex items-center justify-center">
      <button type="button" class="ml-2 text-lg text-orange-400 cursor-pointer w-9 h-9">
        <i class="fas fa-cookie"></i>
      </button>

      <button type="button" class="text-lg text-red-600 cursor-pointer w-9 h-9">
        <i class="fas fa-trash"></i>
      </button>
      
      <i class="mt-2 text-base text-center text-yellow-400 transition-all duration-300 translate-x-6 opacity-0 cursor-pointer fas fa-star w-9 h-9 "></i>
    </div>
  </li>
</template>

<style scoped>
.list-group-item:last-child {
  border-bottom: none;
}
.list-group-item.like .fa-star {
  opacity: 1;
  transform: translateX(0);
}
.list-group-item.favorite .list-group-item-label,
.list-group-item.favorite .list-group-item-input
{
  color: #e09f3e;
}
</style>