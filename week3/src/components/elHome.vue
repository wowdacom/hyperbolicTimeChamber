<template>
  <div class="home grid-screen">
    <div class="home-title">
      <h2>OVERVIEW</h2>
      <div class="filter">
        <div class="filter-date">
          <ul>
            <li class="from">2018/6/6</li>
            <li class="icon"><img src="../assets/triangle.png" alt=""></li>
            <li class="to">2018/6/13</li>
          </ul>
        </div>
        <form action="" class="filter-range">
            <select name="" id="">
              <option value="">Daily</option>
              <option value="">Weekly</option>
              <option value="">Monthly</option>
              <option value="">Yearly</option>
              <option value="">Custom</option>
            </select>
          </form>
      </div>
    </div>
    <div class="business-info">
      <ul>
        <li v-for="item in business" :key="item.name"><h3><img :src="item.img" alt="" class="icon"></h3><div class="value" :class="item.name">{{ numberFormatted(item.value) }}</div></li>
      </ul>
    </div>
    <div class="chart-container">
      <h3 class="title">Activity</h3>
    </div>
    <div class="downside-wrapper">
      <div class="transaction">
        <h3 class="title">Transaction Website</h3>
        <ul>
          <li v-for="(item, index) in tranWebsites" :key="index">
            <div class="website">
              <ul>
                <li class="icon"><img :src="item.img" alt=""></li>
                <li class="url">{{ item.url }}</li>
                <li class="value">{{ item.value }}</li>
                <li class="view"><img src="" alt="">{{ item.view }}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="latest-order">
        <h3 class="title">Latest Orders</h3>
        <div class="orders">
          <ul>
            <li v-for="(item, index) in latestOrder" :key="index">
              <div class="order">
                <img :src="item.img" class="icon" alt="">
                <ul>
                  <li class="stuff-name">{{ item.name }}</li>
                  <li class="date">{{ item.date }}</li>
                  <li class="brand">{{ item.brand }}</li>
                </ul>
              </div>
              <div class="total">
                <p>Total</p>
                <p>{{ item.total }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data: function () {
    return {
      business: [
        {
          name: 'revenue',
          title: 'TOTAL REVENUE',
          value: 54540,
          img: require('../assets/revenue.png'),
        },
        {
          name: 'cost',
          title: 'TOTAL COST',
          value: 12600,
          img: require('../assets/total.png')
        },
        {
          name: 'income',
          title: 'NET INCOME',
          value: 41880,
          img: require('../assets/income.png')
        }
      ],
      tranWebsites: [
        {
          img: require('../assets/income.png'),
          url: 'Facebook.com',
          value: 45863,
          view: 20,
        },
        {
          img: require('../assets/income.png'),
          url: 'Google.com',
          value: 23582,
          view: 12,
        },
        {
          img: require('../assets/income.png'),
          url: 'Google.com',
          value: 23582,
          view: 12,
        },
        {
          img: require('../assets/income.png'),
          url: 'Google.com',
          value: 23582,
          view: 12,
        }
      ],
      latestOrder: [
        {
          name: 'Vintage T-shirt',
          img: require('../assets/income.png'),
          date: '2018/6/13 13:42',
          brand: 'Belle Wills',
          total: 3200
        },
        {
          name: 'Vintage T-shirt',
          img: require('../assets/income.png'),
          date: '2018/6/13 13:42',
          brand: 'Belle Wills',
          total: 3200
        },
        {
          name: 'Vintage T-shirt',
          img: require('../assets/income.png'),
          date: '2018/6/13 13:42',
          brand: 'Belle Wills',
          total: 3200
        }
      ]
    }
  },
  methods: {
    numberFormatted (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  .home-title {
    height: 78px;
    position: relative;
    padding: 30px 0px 20px 0px;
    h2 {
      display: inline-block;
      top: 50%;
      left: 0px;
      
    }
    .filter {
      position: absolute;
      top: 50%;
      right: 0px;
      transform: translateY(-50%);
      color: #9B9B9B;
      .filter-date {
        display: inline-block;
        ul {
          li {
            display: inline-block;
            img {
              width: 5px;
              height: 9px;
              line-height: inherit;
            }
          }
        }
      }
      .filter-range {
        display: inline-block;
        select {
          border: 0px;
          background-color: #F2F2F2;
          font-size: 16px;
          color: inherit;
          option {
            width: 125px;
            border-radius: 0px;
          }
        }
      }
    }
  }
  .business-info {
    margin-bottom: 18px;
    .icon {
      width: 26px;
      height: 25px;
      margin-right: 8px;
       vertical-align: middle;
       transform: translateY(-10%);
    }
    ul {
      display: flex;
      li:nth-child(1) {
        margin-right: 20px;
      }
      li:nth-child(3) {
        margin-left: 20px;
      }
      li {
        display: inline-block;
        width: calc(100% / 3);
        background-color: white;
        text-align: center;
        h3 {
          padding: 30px 0px 16px 0px;
        }
        .value {
          font-size: 36px;
          padding-bottom: 30px;
        }
        .revenue {
          color:#7ED321;
        }
        .cost {
          color: #D0021B;
        }
        .income {
          color: #4A90E2;
        }
      }
    }
  }
  .chart-container {
    background-color: white;
    margin-bottom: 18px;
    padding: 30px 40px;
    .title {
      font-size: 24px;
    }
  }
  .downside-wrapper {
    display: flex;
    margin-bottom: 42px;
    .title {
      font-size: 24px;
    }
    .transaction {
      width: 50%;
      background-color: #fff;
      padding: 30px 40px;
      margin-right: 20px;
      ul {
        padding-top: 7px;
        li {
          .website {
            padding: 23px 0;
            ul {
              li {
                display: inline-block;
              }
            }
          }
        }
      }    
    }
    .latest-order {
      width: 50%;
      background-color: #fff;
      padding: 30px 40px;
      .orders {
        & > ul {
          & > li {
            position: relative;
            border-bottom: solid 1px black; 
            .order {
              height: 108px;
              padding: 8px 0;
              clear: both;
              .icon {
                float: left;
                margin-right: 25px;
                width: 100px;
                height: 100%;
              }
              ul {
                float: left;
                li {
                  margin-bottom: 8px;
                  &.stuff-name {
                    font-size: 20px;
                    font-weight: 900;
                  }
                  &.date {
                    font-size: 16px;
                    color: #9B9B9B;
                  }
                  &.brand {
                    font-size: 16px;
                    color: #9B9B9B;
                  }
                }
              }
            }
            .total {
              position: absolute;
              right: 0px;
              bottom: 21px;
              text-align: right;
            }
          }
        }
      }   
    }
  }
}
</style>
