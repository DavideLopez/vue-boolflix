<template>
  <main>
       <!-- PARTE FILM -->
    <section class="container">
      <h2>Film:</h2>
      <ul class="row">
        <li class="col" v-for="movie in movies" :key="movie.id">
          <CardMovie :info="movie" />
        </li>
      </ul>
    </section>
      <!-- PARTE SERIE TV -->
    <section class="container">
      <h2>Serie TV:</h2>
      <ul class="row">
        <li class="col" v-for="serie in series" :key="serie.id">
          <CardMovie :info="serie" />
        </li>
      </ul>
    </section>


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
    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

main {
  background-color: rgb(25, 25, 25);
}

h2 {
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: bold;
}


section {
  color: white;
  padding: 50px;
}



      
</style>