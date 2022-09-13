<template>
  <div id="app">
           {{search}}
    <MainHeader @search="onSearch" />
    <MainContent :searched="search" />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import MainContent from './components/MainContent.vue';
// import CardMovie from './components/CardMovie.vue';


export default {
  name: 'App',
  components: {
    MainHeader,
    MainContent
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    onSearch(data) {
      this.search = data;
    }
  }
}
</script>

<style lang="scss">
  // @import '../src/style/index.scss' EMPTY

</style>

