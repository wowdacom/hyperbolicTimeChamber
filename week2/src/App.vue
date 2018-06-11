<template>
  <div id="app">   
    <HelloWorld/>
    <SearchList/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SearchList from './components/SearchList'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SearchList
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html, body {
  margin: 0px;
}
#app {
  
}
</style>
