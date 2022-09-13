<template>
  <div id="app">
    <MainHeader />
    <MainContent />
    <CardMovie />
  </div>
</template>

<script>
import MainContent from './components/MainContent.vue';
import MainHeader from './components/MainHeader.vue';
import CardMovie from './components/CardMovie.vue';


export default {  
  name: 'App',
  components: {
    MainContent,
    MainHeader,
    CardMovie
}
  
}
</script>

<style lang="scss">
  // @import '../src/style/index.scss' EMPTY

</style>
