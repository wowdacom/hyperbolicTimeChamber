<template>
  <div id="app">   
    <HelloWorld/>
    <div class="main-page-left">
      <SearchList/>
    </div>
    <div class="main-page-right">
      <div class="result grid-mobile hd-mobile">
        Showing <span>{{ result }}</span> results by...
        <ul>
          <li>Koahsiung<img src="./assets/delete.png" alt="" class="icon"></li>
          <li>Exhibition<img src="./assets/delete.png" alt="" class="icon"></li>
        </ul>
      </div>
       <CardBox/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SearchList from './components/SearchList'
import CardBox from './components/CardBox'

export default {
  name: 'App',
  data () {
    return {
      result: 15
    }
  },
  components: {
    HelloWorld,
    SearchList,
    CardBox
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html, body {
  margin: 0px;
    background-color: #F2F2F2;
}
ul {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
#app {
  clear: both;
  .main-page-left {
    @media screen and (min-width: 426px) and (max-width: 768px) {
      float: left;
      width: 43%;
    }
    @media screen and (min-width: 769px) {
      float: left;
      width: 25%;
      margin-left: 38px;
    }
  }
  .main-page-right {
    @media screen and (min-width: 426px) and (max-width: 768px) {
      float: right;
      width: 57%;
      padding: 24px 42px;
    }
    @media screen and (min-width: 769px) {
      float: left;
      width: 72%;
    }
    .result {
        font-size: 24px;
        margin-top: 29px;
        span {
          color: #9013FE;
        }
        ul {
        margin-top: 8px;
        li {
          display: inline-block;
          border: solid 1px #9013FE;
          border-radius: 100px;
          color: #9013FE;
          font-size: 16px;
          padding: 8px 16px;
          img {
            width: 14px;
            height: 14px;
            margin-left: 8px;
            vertical-align: middle;
          }
        }
      }
    }
  } 
}

// 設定統一的格線系統
.grid-mobile {
  width: 80%;
  margin: 0 auto;
}

//設定在不同螢幕大小需要隱藏的 class
.hd-mobile {
  @media screen and (max-width: 426px) {
    display: none;
  }
}
</style>
