<template>
  <div id="app">
    
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{movie.original_title}}

      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      movies: [],
      api_key: 'dc0f4bc3c4b83b8f323ddf4bf475be19',
      query: 'club',
      BASE_URL: 'https://api.themoviedb.org/3'
    }
  },
  methods: {
    fetchMovies() {
      axios.get(`${this.BASE_URL}/search/movie?api_key=${this.api_key}&query=${this.query}`)
      .then((res) => {
        console.log(res)
        this.movies = res.data.results
      })
    }
  },
  beforeMount() {
this.fetchMovies()
  }
  
}
</script>

<style lang="scss">
#app {
  
}
</style>
