<template>
  <div id="app">
    <main-nav></main-nav>
    <transition name="fade" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import mainNav from '@/components/mainNav.vue'

export default {
  name: 'App',
  components: {
    mainNav
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
.grid-screen {
  padding: 0 24px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}


#app {
}
</style>
