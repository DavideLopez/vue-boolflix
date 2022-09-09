<template>
  <div id="app">
    <MainHeader />
    <MainContent />
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
