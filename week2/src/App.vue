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
ul {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
#app {
  
}
</style>
