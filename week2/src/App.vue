<template>
  <div id="app">   
    <HelloWorld/>
    <SearchList/>
    <CardBox />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SearchList from './components/SearchList'
import CardBox from './components/CardBox'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SearchList,
    CardBox
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html, body {
  margin: 0px;
    background-color: #F2F2F2;
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
.grid-mobile {
  width: 80%;
  margin: 0 auto;
}
</style>
