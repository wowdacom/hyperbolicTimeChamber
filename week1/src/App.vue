<template>
  <div id="app">
    
    <HelloWorld/>
    <transition mode="out-in" name="fade">
      <AddTask  @updateList="addNewTask($event)"/>
    </transition>
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
  mounted () {
    this.taskShow = this.tasks
  },
  methods: {
    taskEdit (whichTask, status) {
      status === 'cancel' ? this.tasks[whichTask].isEdit = false : this.tasks[whichTask].isEdit = true
    },
    switchStarLight (whichTask) {
      this.$set(this.tasks[whichTask], 'isImportant', !this.tasks[whichTask].isImportant)
      this.tasksSorted()
    },
    correctTheBox (whichTask) {
      this.tasks[whichTask].isDone = !this.tasks[whichTask].isDone
    },
    addNewTask (newTask) {
      this.$set(this.tasks, this.tasks.length, newTask)
    },
    tasksSorted () {
      console.log("kkkkk")
      this.tasks = this.tasks.sort((item, item2)=>{
        return item2.isImportant > item.isImportant
      })
    }
  },
  // watch: {
  //   tasks: {
  //     handler: function(){
  //       console.log("hahaaaaa")
        
        
  //     },
  //     deep: true
  //   }
  // }
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


#app {
  padding-bottom: 319px;

  
}

</style>
