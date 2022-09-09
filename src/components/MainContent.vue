<template>
    <main>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
         <span>{{ movie.original_title }}</span>
         <span>{{ movie.title }}</span>
         <span>{{ movie.original_language }}</span>
         <span>{{ movie.vote_average }}</span>

      </li>
    </ul>

    </main>
  
</template>

<script>
    import axios from 'axios';
    export default {
      name: 'MainContent',
      data() {
        return {
          BASE_URI: 'https://api.themoviedb.org/3',
          api_key: '735e75087705e688a8302c51505637e4',
          query: 'ritorno',
          movies: []
        }
      },
      methods: {
        fetchMovies() {
          axios
            .get(`${this.BASE_URI}/search/movie?api_key=${this.api_key}&query=${this.query}`)
            .then(((res) => {
              this.movies = res.data.results;
            }));
        }
      },
      created() {
        this.fetchMovies();
      }
    }
    </script>
    
    <style scoped lang="scss">
    </style>