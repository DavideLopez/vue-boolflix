<template>
  <main>
    <h2>Movies: {{movies.length}}</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <CardMovie :info="movie" />
      </li>
    </ul>
    <h2>Series: {{series.length}}</h2>
    <ul>
      <li v-for="serie in series" :key="serie.id">
        <CardMovie :info="serie" />
      </li>
    </ul>
  </main>
</template>

<script>
import CardMovie from './CardMovie.vue';
export default {
  name: 'MainContent',
  components: {
    CardMovie
  },
  props: {
    movies: Array,
    series: Array
  }
}
</script>
    
<style scoped lang="scss">

      
</style>