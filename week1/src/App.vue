<template>
  <div id="app">
    
    <HelloWorld/>
    <AddTask/>
    <TaskList v-for="(item, index) in tasks" :task="item" :key="item.id" @expendEditBox="taskEdit(index, $event)"></TaskList>
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
  },
  data () {
    return {
      tasks:[
        {
        'id': '1',
        'title': "Type Something Here...",
        'deadline': "6/8",
        'file': "pdf",
        'Comment': "Practice to build a todo list",
        "isEdit": false,
        "isImportant": false
        },
        {
        'id': '2',
        'title': "Type Something Here...",
        'deadline': "6/9",
        'file': "pdf",
        'Comment': "Practice to build a todo list",
        "isEdit": false,
        "isImportant": false
        },
        {
        'id': '3',
        'title': "Type Something Here...",
        'deadline': "6/10",
        'file': "pdf",
        'Comment': "Practice to build a todo list",
        "isEdit": false,
        "isImportant": false
        },
        {
        'id': '4',
        'title': "Type Something Here...",
        'deadline': "6/11",
        'file': "pdf",
        'Comment': "Practice to build a todo list",
        "isEdit": false,
        "isImportant": false
        },
        {
        'id': '5',
        'title': "Type Something Here...",
        'deadline': "6/12",
        'file': "pdf",
        'Comment': "Practice to build a todo list",
        "isEdit": false,
        "isImportant": false
        },
      ]
    }   
  },
  methods: {
    taskEdit (whichTask, status) {
      status === 'cancel' ? this.tasks[whichTask].isEdit = false : this.tasks[whichTask].isEdit = true
    }
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
button:focus {
  outline:0;
  }

.column-screen {
  width: 620px;
  margin: 0 auto;
}
#app {
  padding-bottom: 319px; 
}
</style>
