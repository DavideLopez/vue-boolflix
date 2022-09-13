<template>
    <header class="navbar">
        <h1>BOOLFLIX</h1>
        <div>
            <input type="text" v-model="query" placeholder="Cerca...." >
            <button @click="">CERCA</button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'MainHeader'
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
