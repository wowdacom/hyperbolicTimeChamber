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
            from: <input class="date-from" type=""><br>
            to: <input class="date-to" type="">
          </form>
        </div>
      </li>
      <li>
        <div class="Categories">
          <div class="form-title">Categories<img src="" alt="" class="icon"></div>
          <ul>
            <li><img src="http://via.placeholder.com/16x16"> All</li>
            <li><img src="http://via.placeholder.com/16x16"> Entertainment</li>
            <li><img src="http://via.placeholder.com/16x16"> Food</li>
            <li><img src="http://via.placeholder.com/16x16"> Learning</li>
            <li><img src="http://via.placeholder.com/16x16"> Outdoors</li>
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
      background: #EBEBEB;
      padding: 24px 40px;
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
          
        }
      }
      .Categories {
        @media screen and (max-width: 425px) {
          
        }
      }
      
    }
  }
}
</style>
