<template>
  <div class="card-box">
    <div class="card grid-mobile" v-for="(item, index) in 2" :key="index">
      <img src="http://via.placeholder.com/350x180">
      <div class="card-content">
        <div class="card-title">Kogi Cosby sweater.</div>
        <div class="card-describe">Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy</div>
        <div class="card-organizer">Ethan Foster<span class="tag">Entertainment</span></div>
        <ul class="card-locate-date">
          <li><img class="icon" src="../assets/location.png">Kaohsiung City</li>
          <li><img class="icon" src="../assets/calendar.png">2018/5/24 - 2018/5/31</li>
        </ul>
      </div>     
    </div>
    <div class="paging grid-mobile">
      <ul>
        <li @click="go('Last')">«</li>
        <li v-for="(item, index) in pages" :key="index" @click="paging(index)" :class="{active: item}">{{ index + 1 }}</li>
        <li @click="go('Next')">»</li>
      </ul>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'search-list',
  data () {
    return {
      currentPage: 0,
      pages: [true, false, false, false, false]
    }
  },
  methods: {
    paging (whichPage) {
      this.pages.fill(false, 0, this.pages.length)
      this.currentPage = whichPage
      this.$set(this.pages, this.currentPage, true)
    },
    go (direction) {
      if (direction === 'Last' && this.currentPage !== 0) {
        this.currentPage -= 1
        this.pages.fill(false, 0, this.pages.length)
        this.$set(this.pages, this.currentPage, true)

      } else if (direction === 'Next' && this.currentPage !== this.pages.length - 1 ) {
        this.currentPage += 1
        this.pages.fill(false, 0, this.pages.length)
        this.$set(this.pages, this.currentPage, true)
      } else {
        console.log("there is something wrong!")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card-box {
  .card {
    @media screen and (min-width: 769px) {
      height: 220px;
      clear: left;
    }
    height: 414px;
    background-color: #EBEBEB ;
    margin-top: 25px;
    margin-bottom: 25px;
    
    img {
      @media screen and (min-width: 769px) {
        height: 100%;
        width: 220px;
        float: left;
      }
      width: 100%;
      height: 196px;
    }
    .card-content {
      @media screen and (min-width: 769px) {
        float: left;
        width: 50%;
      }
      padding: 20px 24px;
      .card-title {
        color: #9013FE;
        font-size: 20px;
        font-weight: 900;
      }
      .card-describe {
        
      }
      .card-organizer {
        font-weight: 900;
        margin-top: 12px;
        .tag {
          border-radius: 100px;
          padding: 0 16px;
          margin-left: 20px;
          font-weight: 400;
          background: #D7D7D7;
          color: #ffffff;
        }
      }
      .card-locate-date {
        margin-top: 16px;
        color: #9B9B9B;
        .icon {
          width: 12px;
          height: 12px;
          margin-right: 7px;
        }
      }
    }   
  }
  .paging {
    margin-bottom: 29px;
    ul {
      margin: 0px 15px;
      font-size: 0px;
      li {
        text-align: center;
        display: inline-block;
        width: calc(100%/7);
        line-height: 32px;
        background-color: #fff;
        border: solid 1px #F2F2F2;
        font-size: 16px;
      }
      .active {
        color: #ffffff;
        background-color: #9013FE;
      }
    }    
  }
}
</style>
