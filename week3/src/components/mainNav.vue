<template>
  <header class="main-nav grid-screen">
    <ul>
      <li class="logo">Shoptime</li>
      <li><router-link to="home">HOME</router-link></li>
      <li><router-link to="orders">ORDERS</router-link></li>
      <li><router-link to="product">PRODUCT</router-link></li>
      <li class="auto">{{ identity }}</li>
    </ul>

  </header>
</template>

<script>
export default {
  name: 'main-nav',
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      identity: 'ADMIN'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-nav {
  width: 100%;
  font-family: HelveticaNeue-Bold,serif,sans-serif,cursive,fantasy,monospace;
  background-color: black;
  color: #9B9B9B;
  .logo {
    color: white;
    width: 217px;
    font-size: 24px;
    text-align: left;
    margin-left: 0px;
  }
  .auto {
    float: right;
    color: white;
  }
  ul {
    clear: right;
    li {
      width: 80px;
      line-height: 70px;
      text-align: center;
      display: inline-block;
      margin: 0 5px;
      cursor: pointer;
      border-bottom: solid 4px black;
      font-size: 16px;
      &:hover:not(.logo):not(.auto) {
        transition: all 1s;
        border-bottom: solid 4px white;
        color: #ffffff;
      }
    }
  }
}
</style>
