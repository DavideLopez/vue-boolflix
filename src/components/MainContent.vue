<template>
    <main>
      <h1>FILM</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
         {{ movie.original_title  }}
         {{ movie.title  }}
         {{ movie.original_language  }}
         {{ movie.vote_average  }}
      </li> 
    </ul>

    <h1>Serie TV</h1>
    <ul>
      <li v-for="serie in series" :key="serie.id">
        {{ tv.original_title  }}
         {{ tv.title  }}
         {{ tv.original_language  }}
         {{ tv.vote_average  }}

      </li>
    </ul>

    </main>
  
</template>

<script>
 import CardMovie from './CardMovie.vue';

    import axios from 'axios';
    export default {
      name: 'MainContent',
      data() {
        return {
          BASE_URI: 'https://api.themoviedb.org/3',   //  https://api.themoviedb.org/3/movie/550?api_key=dc0f4bc3c4b83b8f323ddf4bf475be19
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