<template>
    <header>
      <input v-model="search" type="text">
      <button @click="$emit('search', search)">cerca</button>
    </header>
  </template>
  
  <script>
  export default {
    name: 'MainHeader',
    data() {
      return {
        search: ''
      }
    }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
