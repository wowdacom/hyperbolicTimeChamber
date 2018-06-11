<template>
  <input class="add-task column-screen" placeholder="Add Task">
</template>

<script>
export default {
  name: 'AddTask',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.add-task {
  display: block;
  height: 65px;
  background-color: #fff;
  border: 2px solid #C8C8C8;
  border-radius: 5px;
  font-family: Roboto-Regular;
  font-size: 24px;
  color: #C8C8C8;
  padding: 19px 67px;
  &::placeholder {
    color: #C8C8C8;
  }
}
</style>
