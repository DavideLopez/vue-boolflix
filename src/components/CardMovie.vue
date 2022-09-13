<template>
  <div class="card">
    <img class="poster" v-if="info.poster" :src="info.poster" alt="info.title">
    <div class="placeholder" v-else></div>

    <div class="card-content">
      <h3 class="title">{{ info.title }}</h3>
      <p class="original-title">{{ info.original_title }}</p>

      <img class="flag" v-if="info.flag" :src="info.flag" alt="">
      <div class="lang" v-else>{{ info.lang }}</div>
      
      <div class="stars">
        <font-awesome-icon v-for="n in info.vote" :key="n" icon="fa-solid fa-star"></font-awesome-icon>
        <font-awesome-icon v-for="n in (5 - info.vote)" :key="n + info.vote" icon="fa-regular fa-star"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMovie',
  props: {
    info: Object,
  }
}



</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.card {

  height: 100%;
  position: relative;

  .poster {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder {
    height: 100%;
    border: 3px solid black;
  }

  .card-content {
    padding: 20px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    &:hover {
      opacity: 0.8;
      background-color: #333;
    }
  }

  .flag {
    width: 50px;
    
  }


  .stars * {
    margin-right: 6px;
    color: gold;
  }
}


</style>