<template>
  <div class="search-list">
    <ul>
      <li :class="{isSprite: expendControl['Location']}">
        <div class="Location grid-mobile">
          <div class="form-title">Location <div src="../assets/expend.png" alt="" class="icon" @click="expendControl['Location'] = !expendControl['Location']" ></div></div>
          <div v-if="expendControl['Location']">
            <select>
              <option>American</option>
              <option selected="selected">Taiwan</option>
              <option>Japen</option>
              <option>U.K.</option>
            </select>
          </div>
        </div>
      </li>
      <li :class="{isSprite: expendControl['Date']}">
        <div class="Date grid-mobile">
          <div class="form-title">Date <div src="../assets/expend.png" alt="" class="icon" @click="expendControl['Date'] = !expendControl['Date']" ></div></div>
          <div v-if="expendControl['Date']">
          <form action="">
            <span>from </span><input class="date-from" type="" placeholder="2018/5/24"><br>
            <span>to </span><input class="date-to" type="" placeholder="6/1">
          </form>
          </div>
        </div>
      </li>
      <li :class="{isSprite: expendControl['Categories']}">
        <div class="Categories grid-mobile">
          <div class="form-title">Categories <div src="../assets/expend.png" alt="" class="icon" @click="expendControl['Categories'] = !expendControl['Categories']" ></div></div>
          <div v-if="expendControl['Categories']">
            <ul>
              <li v-for="(item, key) in Categories" :key="key"><div class="icon" :class="{isSprite: item}"></div> {{ key }}</li>
            </ul>
          </div>
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
      expendControl: {
        'Location': true,
        'Date': true,
        'Categories': true
      },
      Categories: {
        'All': false,
        'Entertainment': false,
        'Food': false,
        'Learning': true,
        'Outdoors': false
      }
    }
  },
  methods: {
    contractAllList(){
      var vm = this
      var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

      var height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
      console.log(width)
      if(width <= 425) {
        vm.expendControl = {
          'Location': false,
          'Date': false,
          'Categories': false
        }
      }
    }
  },
  mounted () {
    this.contractAllList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search-list {
  background-color: #fff;
   & > ul {
    .isSprite {
      background-color: #EBEBEB;
      .form-title {
        margin-bottom: 24px;
      }
      .icon {
        background-position: -16px 0px;
      }     
    }
    & > li {
      background: #D7D7D7;
      padding: 24px 0px;
      border-bottom: 1px solid #9B9B9B;
      
      .form-title {
        font-size: 20px;
        margin: 0px;
        position: relative;
        font-weight: 900;
        .icon {
           @media screen and (min-width: 426px) {
            display: none;
          }
          display: inline-block;
          width: 17px;
          height: 17px;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);       
          background: url("../assets/expend.png") no-repeat ;
          background-size: cover;
          background-position: 0px 0px;
        }
      }
      
      .Location {
        @media screen and (max-width: 425px) {
          // height: 136px;
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
