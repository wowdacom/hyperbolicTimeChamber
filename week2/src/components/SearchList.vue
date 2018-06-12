<template>
  <div class="search-list">
    <ul>
      <li>Location</li>
      <li>Date</li>
      <li>Categories</li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'search-list',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search-list {
  ul {
    li {
      list-style: none;
    }
  }
}
</style>
