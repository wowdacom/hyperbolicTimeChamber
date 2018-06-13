<template>
  <div class="search-list">
    <ul>
      <li>
        <div class="Location">
          <div class="form-title">Location <img src="" alt="" class="icon"></div>
          <select>
            <option>American</option>
            <option selected="selected">Taiwan</option>
            <option>Japen</option>
            <option>U.K.</option>
          </select>
        </div>
      </li>
      <li>
        <div class="Date">
          <div class="form-title">Date<img src="" alt="" class="icon"></div>
          <form action="">
            <span>from </span><input class="date-from" type="" placeholder="2018/5/24"><br>
            <span>to </span><input class="date-to" type="" placeholder="6/1">
          </form>
        </div>
      </li>
      <li>
        <div class="Categories">
          <div class="form-title">Categories<img src="" alt="" class="icon"></div>
          <ul>
            <li v-for="(item, key) in Categories" :key="key"><div class="icon" :class="{isSprite: item}"></div> {{ key }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'search-list',
  data () {
    return {
      msg: '',
      Categories: {
        'All': false,
        'Entertainment': false,
        'Food': false,
        'Learning': true,
        'Outdoors': false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search-list {
   & > ul {
    & > li {
      background: #EBEBEB;
      padding: 24px 40px;
      border-bottom: 1px solid #D7D7D7;
      .form-title {
        font-size: 20px;
        margin-bottom: 24px;
      }
      .Location {
        @media screen and (max-width: 425px) {
          height: 136px;
        }
        select {
          display: block;
          margin: 0 auto;
          padding: 8px;
          width: 100%;
          height: 40px;
          background-color: #ffffff;
          border: 0px;
          border-radius: 0;
        }
      }
      .Date {
        @media screen and (max-width: 425px) {
          form {           
            span {
              display: inline-block;
              width: 20%;
              margin-bottom: 8px;
              padding-right: 13px;
              text-align: right;
            }
            input {
              width: 80%;
              height: 40px;
              margin-bottom: 8px;
              padding: 11px;

            }
          }
        }
      }
      .Categories {
        @media screen and (max-width: 425px) {
          ul {
            li {
              padding: 0px;
              margin-bottom: 8px;
              
              div {
                width: 16px;
                height: 16px;
                display: inline-block;
                background: url("../assets/check.png") no-repeat ;
                background-size: cover;
                background-position: -16px 0px;
              }
              .isSprite {
                background-position: 0px 0px;
              }
            }
          }
        }
      }
      
    }
  }
}
</style>
