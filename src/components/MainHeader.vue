<template>
    <header>

        <div class="logos">
            <h1>BOOLFLIX</h1>

        </div>
      

        <!-- BARRA E PULSANTE -->
      <div class="searcher">
        <input v-model="query" type="text" placeholder="Inserisci un Titolo...">
        <button @click="getData">Cerca</button>
      </div>
    </header>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'MainHeader',
    data() {
      return {
        BASE_URI: 'https://api.themoviedb.org/3',
        api_key: 'dc0f4bc3c4b83b8f323ddf4bf475be19',  // https://api.themoviedb.org/3/movie/550?api_key=dc0f4bc3c4b83b8f323ddf4bf475be19
        query: ''
      }
    },
    methods: {
      getData() {
        if (!this.query.trim()) {
          return
        }
        this.fetchMovies();
        this.fetchSeries();
      },
      fetchMovies() {
        axios
          .get(`${this.BASE_URI}/search/movie`, {
            params: {
              api_key: this.api_key,
              query: this.query.trim()
            }
          })
          .then((res) => {
            console.log(res.data.results);
            this.$emit('onSearchMovies', res.data.results);
          });
      },
      fetchSeries() {
        axios
          .get(`${this.BASE_URI}/search/tv`, {
            params: {
              api_key: this.api_key,
              query: this.query.trim()
            }
          })
          .then((res) => {
            console.log(res.data.results);
            this.$emit('onSearchSeries', res.data.results);
          });
      }
    }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

header {
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;

}

h1 {
  font-weight: bold;
  color: red;

  &:hover {
    cursor: pointer;
  }
}

input {
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 16px;
  color: white;
  background-color: transparent;
}

button {
  padding: 10px 15px;
  border-radius: 2px;
  font-size: 16px;
  background-color: red;
  color: white;
  border: 1px solid red;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
}

</style>
