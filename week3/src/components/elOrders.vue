<template>
  <div class="orders grid-screen">
    <div class="title grid-screen">
      <div class="click_all"><div class="click_box"></div><img src="../assets/triangle-down.png" alt=""></div>
      <div class="edit_section"><span class="edit_section_options">EDIT SECTION</span><img src="../assets/triangle-down.png" alt=""></div>
    </div>
    <table class="order_table">
      <tr class="table_title">
        <th class="customer_title">Customer</th>
        <th>Product List</th> 
        <th class="total_title">Total</th>
        <th>Add to Cart</th>
        <th>Checkout-out</th> 
        <th>Address</th>
        <th>Status</th>
      </tr>
      <tr class="table_content" v-for="(item, index) in orderList" :key="index">
        <td class="customer_content">
          <div><div class="click_box"></div>{{ item.customer }}</div>
        </td>
        <td>
          <div class="ProductList">
            <ul>
              <li v-for="item2 in item.productList" :key="item2"><div>{{ item2.title }}</div><div>{{ item2.value }}</div></li>
            </ul>
          </div>
        </td>
        <td class="total">{{ item.total }}</td>
        <td>{{ item.cart }}</td>
        <td>{{ item.checkOut }}</td>
        <td>{{ item.address }}</td>
        <td>
          <select>
            <option v-for="item3 in item.status" :value="item3" :key="item3">{{ item3.title }}</option>
          </select>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'orders',
  data: function () {
    return {
      orderList: [
        {
          customer: 'Ian Medina',
          productList: [
            {
              title: 'Vestibulum',
              value: 1400
            },
            {
              title: 'Fusce vehicu',
              value: 800
            }
          ],
          total: 2200,
          cart: '2018/6/8 13:39',
          checkOut: '2018/6/8 20:23',
          address: '386 Windler Drives Apt. 358',
          status: [
            {
              title: 'PAID',
              select: true
            },
            {
              title: 'UNPAID',
              select: false
            },
            {
              title: 'SHIPPING',
              select: false
            },
            {
              title: 'DONE',
              select: false
            }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .title {
    clear: both;
    padding: 27px 0 16px 0;
    height: 61px;;
    line-height: 15px;
    .click_all {
      float: left;
      position: relative;
      .click_box {
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 3px;
        border: solid 1px black;
        margin-left: 15px;
      }
      img {
        width: 9px;
        height: 5px;
        position: absolute;
        top: 50%;
        left: 35px;
        transform: translateY(-50%);
      }
    }
    .edit_section {
      float: right;
      .edit_section_options {
        font-weight: bold;
        margin-right: 5px;
      }
      img {
        width: 9px;
        height: 5px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .order_table {
    width: 100%;
    table-layout: fixed;
    text-align: left;
    border-spacing: 0;
    .table_title {
      height: 40px;
      background-color: #fff;
      font-weight: bolder;
      font-size: 16px;
      & > * {
        padding: 11px 0 10px 0;
      }
      .customer_title {
        padding-left: 39px;
      }
      .total_title {
        text-align: center;
      }
    }
    .table_content {
      & > * {
        padding-top: 17px;
      }
      .customer_content {
        .click_box {
          display: inline-block;
          width: 15px;
          height: 15px;
          border-radius: 3px;
          border: solid 1px black;
          margin: 0 8px 0 10px;
        }
      }
    }
    .total {
      text-align: center;
    }
  }
</style>
