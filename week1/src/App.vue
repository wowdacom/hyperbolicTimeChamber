<template>
  <div id="app">
    
    <HelloWorld/>
    <AddTask/>
    <TaskList v-for="item in 4" :key="item"></TaskList>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AddTask,
    TaskList
  }
}
</script>

<style>

html, body {
  margin: 0;
  background: #E1E1E1;
  min-height: 100vh;
}
* {
  box-sizing: border-box;
}
input {
  border-style: none;
}
ul {
  margin: 0px;
  padding: 0px;
}

.column-screen {
  width: 620px;
  margin: 0 auto;
}
#app {
  padding-bottom: 319px; 
}
</style>
