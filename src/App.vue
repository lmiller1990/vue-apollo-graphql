<template>
  <div id="app">
    <button @click="getLanguages">Get Languages</button>
    <router-link 
      v-for="lang in $store.state.languages"
      :key="lang.id"
      :to="lang.id"
    >
      {{ lang.name }}
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

  methods: {
    async getLanguages() {
      await this.$store.dispatch('getLanguages')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
