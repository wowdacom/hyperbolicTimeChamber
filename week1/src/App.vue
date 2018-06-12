<template>
  <div id="app">
    
    <HelloWorld/>
    <AddTask  @updateList="addNewTask($event)"/>
    <TaskList v-for="(item, index) in tasks" :task="item" :key="item.id" @checkUp="correctTheBox(index)" @expendEditBox="taskEdit(index, $event)" @markStar="switchStarLight(index)"></TaskList>
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
        "isImportant": false,
        "isDone": false
        }
      ]
    }   
  },
  methods: {
    taskEdit (whichTask, status) {
      status === 'cancel' ? this.tasks[whichTask].isEdit = false : this.tasks[whichTask].isEdit = true
    },
    switchStarLight (whichTask) {
      this.tasks[whichTask].isImportant = !this.tasks[whichTask].isImportant
    },
    correctTheBox (whichTask) {
      this.tasks[whichTask].isDone = !this.tasks[whichTask].isDone
    },
    addNewTask (newTask) {
      this.tasks.push(newTask)
    }
  },
  computed: {
    bobbleUpImportant(){
      this.tasks = this.tasks.sort((item, item2)=>{
        return item.isImportant > item2.isImportant
      })
      return this.tasks
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
