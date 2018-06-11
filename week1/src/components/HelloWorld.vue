<template>
  <div class="hello">
    <ul class="column-screen">
      <li v-for="(item, index) in nav" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      nav: ['My Task', 'In Progress', 'Completed']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  width: 100%;
  background: #4A90E2;
  font-size: 24px;
  color: #00408B;
  margin-bottom: 24px;
  ul {
    height: 76px;
    display: flex;  
    justify-content: space-around;
    align-items: center;   
    li {
      position: relative;
      list-style: none;
      line-height: 76px;
      width: 220px;
      text-align: center;
      cursor: pointer;
      transition: all 0.5s;
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 0px;
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #00408B;
        transition: all 0.5s;
        opacity: 0;
      }
      &:hover {
        color: #ffffff;
      }
      &:hover::after {
        width: 80%;
        height: 5px;
        opacity: 1;
      }
    }
  }
}
</style>
