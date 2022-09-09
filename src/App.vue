<template>
  <div id="app">
    <MainHeader />
    <MainContent />
    
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{movie.original_title}}

      </li>
    </ul>
  </div>
</template>

<script>
import MainContent from './components/MainContent.vue';
import MainHeader from './components/MainHeader.vue';


export default {
  name: 'App',
  components: {
    MainContent,
    MainHeader
  }
  
  
}
</script>

<style lang="scss">
#app {
  
}
</style>
