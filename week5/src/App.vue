<template>
  <div id="app">
    <header>
      Comicomic
    </header>
    <HelloComic/>
  </div>
</template>

<script>
import HelloComic from './components/HelloComic'

export default {
  name: 'App',
  components: {
    HelloComic
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html, body {
  margin: 0px;
  background-color: #F2F2F2;
  min-height: 100vh;
}
ul {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
h1, h2, h3, h4, h5, p {
  margin: 0px;
}
input:focus, textarea:focus select:focus {
  outline: none;
}
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

.container {
  margin: 0px 10%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  header {
    color: #50FF44;
    font-size: 36px;
    text-align: center;
    font-weight: bold;
    background-color: black;
    line-height: 74px;
  }
}
</style>
