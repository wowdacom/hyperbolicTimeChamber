<template>
  <div class="hello">
    <div class="logo">
      HaveFun
    </div>
    <div class="search-bar">
      <img src="../assets/magnifying-glass.svg"><input class="grid-mobile" type="text" value="Explore your own activities">
    </div>
    
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  
  .logo {
  @media screen and (max-width: 425px) {
    line-height: 69px;
    font-size: 24px;
    text-align: center; 
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    padding-left: 39px; 
  }
  @media screen and (min-width: 769px) {
    padding-left: 78px;
  }
    color: #ffffff;
    background: #7828B4;  
    font-weight: 900;
    line-height: 92px;
    font-size: 36px;
  }
  .search-bar {
    @media screen and (max-width: 425px) {
      width: 100%;
      height: 55px;
      box-shadow: 0 5px 10px 0 #D7D7D7;
    }
    @media screen and (min-width: 426px) {
      opacity: 0; 
    }
    input {
      @media screen and (max-width: 425px) {
      height: 42.5px;  
      padding: 0px 44px;
      font-size: 13.5px;
      display: block;
      background-color: #EBEBEB;
      border: 0px;
      border-bottom: solid 2px black;
      outline: none;
      color: #9B9B9B;
      }
    }
    img {
      @media screen and (max-width: 425px) {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 10%;
        top: 35%;
        transform: translateY(-50%);
      }   
    }
    background-color: #EBEBEB ;
    position: relative;
  }
}
</style>
