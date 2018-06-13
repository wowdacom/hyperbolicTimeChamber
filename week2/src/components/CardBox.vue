<template>
  <div class="card-box">
    <div class="card grid-mobile">
      <img src="http://via.placeholder.com/350x180">
      <div class="card-content">
        <div class="card-title">Kogi Cosby sweater.</div>
        <div class="card-descritbe">Lorem Ipsum is simply dummy</div>
        <div class="card-organizer">Ethan Foster<span class="tag">Entertainment</span></div>
        <ul class="card-locate-date">
          <li><span class="icon"></span></li>
          <li><span class="icon"></span></li>
        </ul>
      </div>     
    </div>
    <div class="paging grid-mobile">
      <ul>
        <li>«</li>
        <li v-for="(item, index) in 5" :key="index">{{ item }}</li>
        <li>»</li>
      </ul>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'search-list',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card-box {
  .card {
    height: 414px;
    background-color: #EBEBEB ;
    margin-top: 25px;
    margin-bottom: 25px;
    
    img {
      width: 100%;
      height: 196px;
    }
    .card-content {
      padding: 20px 24px;
      .card-title {
        color: #9013FE;
        font-size: 20px;
        font-weight: 900;
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
    }    
  }
}
</style>
