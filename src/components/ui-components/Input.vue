<script>
  export default {
    name: 'Input',
    props: {
      modelValue: [String, Number],
    },
    methods: {
      updateInput(e) {
        this.$emit('update:modelValue', e.target.value)
      }
    },
  }
</script>

<template>
  <input
    type="text"
    class="block w-full border rounded-md shadow-xl"
    :value="modelValue"
    @input="updateInput"
  />
</template>

<style scoped>
  
</style>