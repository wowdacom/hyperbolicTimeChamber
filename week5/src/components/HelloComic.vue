<template>
  <div class="helloComic">
    <div class="container">
      <div class="cover">
        <div class="cover-left">
          <img src="@/assets/cover.png" alt="">
        </div>
        <div class="cover-right">
          <div class="cover-right-title">
            MY HEXSCHOOL
          </div>
          <div class="cover-right-content">
            <ul>
              <li class="Genres">
                <div class="Genres-title title">Genres</div>
                <div class="content">Fusce/vehicula/dolor</div>
                
              </li>
              <li class="Author">
                <div class="Author-title title">Author</div>
                <div class="content">Namae Shiranai</div>   
              </li>
              <li class="Status">
                <div class="Status-title title">Status</div>
                <div class="content">Ongoing</div>           
              </li>
              <li class="Rate">
                <div class="Rate-title title">Rate</div>
                <div class="content">
                  <ul>
                    <li :style="{ 'background-image': 'url(' + start.clicked + ')' }"></li>
                    <li :style="{ 'background-image': 'url(' + start.clicked + ')' }"></li>
                    <li :style="{ 'background-image': 'url(' + start.clicked + ')' }"></li>
                    <li :style="{ 'background-image': 'url(' + start.clicked + ')' }"></li>
                    <li :style="{ 'background-image': 'url(' + start.default + ')' }"></li>
                  </ul>
                </div>          
              </li>
            </ul>
            <div class="Summary">
              <div class="Summary-title title">
                Summary
              </div>
              <p class="Summary-content">
                If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die. 
                <br>
                <br>     
                Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="chapters">
        <div class="chapter-title">
          All Chapters
        </div>
        <div class="chapter-content">
          <ul>
            <li>Chapter 1: The F2E Challenge Start!</li>
            <li>Chapter 2: Todo List is Going Crazy!<div class="lastest">NEW</div></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      start: {
        'default': require('@/assets/star.png'),
        'clicked': require('@/assets/star_clicked.png'),
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700,700i,900,900i');

  .helloComic {
    margin-bottom: 50px; 
    .cover {
      margin: 24px 0px 24px 0px;
      clear: both;
      height: 860px;
      .cover-left {
        width: 50%;
        float: left;
        img {
          border: 4px solid #000000;
          width: 100%;
          height: 100%;
        }
      }
      .cover-right {
        width: 50%;
        float: right;
        color: black;
        .cover-right-title {
          line-height: 52px;
          background-color: black;
          padding: 8px;
          color: #fff;
          font-size: 36px;
          font-weight: bold;
          font-family: 'Roboto', sans-serif;
        }
        .cover-right-content {
          text-align: left;       
          &>ul {
            margin: 16px 20px 24px 20px;
            li {
              clear: left;
              height: 40px;
              .content {
                width: 80%;
                float: left;
                font-family: Roboto-Regular;
                
              }
              .title {
                width: 20%;
                float: left;
                font-weight: 900;
                font-family: 'Roboto', sans-serif;
              }
            }
            .Rate {
              ul {
                li {
                  display: inline-block;
                  width: 16px;
                  height: 16px;
                  background-repeat: no-repeat;
                  background-size: cover;
                }
              }
            }      
          }
          .Summary {
            margin: 0px 20px;
            
            .Summary-title {
              font-weight: 900;
              font-family: 'Roboto', sans-serif;
              padding: 8px 0px;
            }
            .Summary-content {
              word-wrap: break-word;
              line-height: 24px;
            }
          }
        }
      }
    }
    .chapters {
      
      .chapter-title {
        line-height: 52px;
        background-color: black;
        padding: 8px;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
        width: 20%;
      }
      .chapter-content {
        background: #FFFFFF;
        border: 4px solid #000000;
        ul {
          text-align: left;
          padding: 22px 24px;
          font-weight: 900;
          li {
            padding: 15px 0px;
            font-family: Roboto-Bold;
            font-size: 16px;
            color: #000000;
            line-height: 24px;
            .lastest {
              background: #50FF44;
              display: inline-block;
              width: 55px;
              line-height: 18px;
              text-align: center;
              font-size: 14px;
              margin-left: 16px;
            }
          }
        }
      }
    }
  }
</style>
