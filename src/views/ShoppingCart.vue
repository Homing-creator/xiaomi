<template>
    <div class="cart-body">
      <div class="cart-header">
        <div class="container">
          <div class="logo">
            <img src="../assets/icon/x-icon.png" alt="">
          </div>
          <h2>我的购物车</h2>
          <ul class="cart-header-list">
            <li><a href="">登录</a></li>
            <li><span>|</span></li>
            <li><a href="">注册</a></li>
          </ul>
        </div>
      </div>
      <div class="cart-content-null" v-if="cartList.length === 0">
        <img src="../assets/cart/null.png" alt="">
        <div class="cart-content-null-des">
          <h1>您的购物车还是空的！</h1>
          <p>登录后将显示您之前加入的商品</p>
          <div class="cart-content-null-btn">
            <button class="btn1">立即登录</button>
            <button class="btn2">马上去购物</button>
          </div>
        </div>
      </div>
      <div class="cart-content" v-else>
        <div class="container">
          <div class="cart-content-table">
            <table width="1206" cellpadding="10">
              <tr class="table-title">
                <th class="tdcheckbox">
                  <input type="checkbox" v-model="checked" @click="checkedAll">
                  <span>全选</span>
                </th>
                <th v-for="title in tableTitleList" :key="title" :class="{ 'tdnumber': title === '数量' }">{{title}}</th>
              </tr>
              <tr v-for="(goods, index) in cartList" :key="goods.id">
                <td class="tdcheckbox"><input type="checkbox" v-model="checkedList" :value="goods.id" @input="goods.isSelect = !goods.isSelect"></td>
                <td class="tdname">
                  <img :src="goods.color[0].imgSrc" alt="">
                  <p>{{handlegoodname(index)}}</p>
                </td>
                <td>{{goods.price[0].price}}元</td>
                <td class="tdnumber">
                  <div class="counter">
                    <button class="btn btna" @click="changNumber(index, '-')">-</button>
                    <span>{{goods.number}}</span>
                    <button class="btn btnb" @click="changNumber(index, '+')">+</button>
                  </div>
                </td>
                <td class="tdsubtotal">{{subtotal(index)}}元</td>
                <td>
                  <i class="iconfont icon-guanbi del-icon" @click="handlerDelete(index)"></i>
                </td>
              </tr>
            </table>
            <button @click="addgoods">加入购物车</button>
          </div>
          <div class="cart-content-bottom">
            <a href="">继续购物</a>
            <span>|</span>
            <p>共<span>{{totalGoods()}}</span>件商品，已选择<span>{{totalSelect()}}</span>件</p>
            <div class="cart-content-bottom-right">
              <span>合计：</span>
              <h1><span>{{totalPrice()}}</span>元</h1>
              <button class="cart-content-bottom-right-btn" @click="settleAccounts">去结算</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-footer">
        <Footer></Footer>
      </div>
    </div>
</template>

<script>
import Footer from '../components/MyIndex/Footer'
export default {
  name: 'ShoppingCart',
  components: {
    Footer
  },
  data () {
    return {
      checkedList: [],
      checked: false,
      tableTitleStr: '商品名称 单价 数量 小计 操作',
      cartList: [],
      // cartList: [
      //   {
      //     isSelect: false,
      //     id: '1',
      //     name: 'Redmi 8A',
      //     price: [
      //       {
      //         version: '4GB+64GB',
      //         price: '799'
      //       }
      //     ],
      //     color: [
      //       {
      //         imgSrc: require('../assets/product/pms_1571387275.0163295.jpg'),
      //         name: '深海蓝'
      //       }
      //     ],
      //     number: '1'
      //   },
      //   {
      //     isSelect: false,
      //     id: '2',
      //     name: 'Redmi 8A',
      //     price: [
      //       {
      //         version: '4GB+64GB',
      //         price: '799'
      //       }
      //     ],
      //     color: [
      //       {
      //         imgSrc: require('../assets/product/pms_1571387275.0163295.jpg'),
      //         name: '深海蓝'
      //       }
      //     ],
      //     number: '1'
      //   },
      //   {
      //     isSelect: false,
      //     id: '3',
      //     name: 'Redmi 8A',
      //     price: [
      //       {
      //         version: '4GB+64GB',
      //         price: '799'
      //       }
      //     ],
      //     color: [
      //       {
      //         imgSrc: require('../assets/product/pms_1571387275.0163295.jpg'),
      //         name: '深海蓝'
      //       }
      //     ],
      //     number: '1'
      //   },
      //   {
      //     isSelect: false,
      //     id: '4',
      //     name: 'Redmi 8A',
      //     price: [
      //       {
      //         version: '4GB+64GB',
      //         price: '799'
      //       }
      //     ],
      //     color: [
      //       {
      //         imgSrc: require('../assets/product/pms_1571387275.0163295.jpg'),
      //         name: '深海蓝'
      //       }
      //     ],
      //     number: '1'
      //   }
      // ],
      obj: {
        isSelect: false,
        id: '10',
        name: 'Redmi 8A',
        price: [
          {
            version: '4GB+64GB',
            price: '799'
          }
        ],
        color: [
          {
            imgSrc: require('../assets/product/pms_1571387275.0163295.jpg'),
            name: '深海蓝'
          }
        ],
        number: '1'
      }
    }
  },
  computed: {
    tableTitleList () {
      return this.tableTitleStr.split(' ')
    }
  },
  methods: {
    handlegoodname (index) {
      const item = this.cartList[index]
      return item.name + ' ' + item.price[0].version + ' ' + item.color[0].name
    },
    subtotal (index) {
      const item = this.cartList[index]
      return parseInt(item.number) * parseInt(item.price[0].price)
    },
    addgoods () {
      this.cartList.push(this.obj)
    },
    handlerDelete (index) {
      this.cartList.splice(index, 1)
    },
    changNumber (index, flag) {
      let numTemp = this.cartList[index].number
      if (flag === '-' && numTemp > 1) {
        this.cartList[index].number--
      } else if (flag === '+') {
        this.cartList[index].number++
      }
    },
    checkedAll () {
      // window.console.log('check')
      let _this = this
      if (_this.checked) {
        _this.checkedList = []// 反选
        _this.cartList.forEach((item, index) => {
          item.isSelect = false
        })
      } else {
        _this.checkedList = []// 全选
        _this.cartList.forEach((item, index) => {
          _this.checkedList.push(item.id)
          item.isSelect = true
        })
      }
    },
    totalGoods () {
      const list = this.cartList
      let sum = 0
      list.forEach(item => {
        sum += parseInt(item.number)
      })
      return sum
    },
    totalSelect () {
      let sum = 0
      this.cartList.forEach(item => {
        if (item.isSelect) {
          sum += parseInt(item.number)
        }
      })
      return sum
    },
    totalPrice () {
      let sum = 0
      this.cartList.forEach(item => {
        if (item.isSelect) {
          sum += parseInt(item.number) * parseInt(item.price[0].price)
        }
      })
      return sum
    },
    settleAccounts () {
      alert('购买成功')
    }
  },
  watch: {
    'checkedList': {
      handler (val, oldVal) {
        // window.console.log('watch')
        this.checked = val.length === this.cartList.length
      },
      deep: true
    }
  },
  created () {
  },
  mounted () {
    this.cartList = this.$store.state.cartList
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
    // this.$emit('getData', this.cartList)
    // window.console.log(1)
  }
}
</script>

<style scoped lang="scss">
  .cart-body{
    min-width: 1206px;
    .container{
      width: 1206px;
      margin: 0 auto;
    }
    .cart-header{
      min-width: 1206px;
      background-color: #fff;
      height: 58px;
      border-bottom: 2px solid #ff6700;
      padding: 20px 0;
      .logo{
        display: inline-block;
      }
      h2{
        display: inline-block;
        font-size: 30px;
        margin-left: 20px;
        vertical-align: top;
        margin-top: 5px;
      }
      .cart-header-list{
        float: right;
        margin-top: 18px;
        li{
          color: #757575;
          display: inline-block;
          span{
            margin: 0 10px;
          }
        }
      }
    }
    .cart-content-null{
      background-color: #f5f5f5;
      min-height: 500px;
      text-align: center;
      img{
        display: inline-block;
        margin-right: 50px;
        margin-top: 70px;
      }
      .cart-content-null-des{
        display: inline-block;
        vertical-align: top;
        margin-top: 70px;
        h1{
          margin-top: 50px;
          color: #b0b0b0;
          font-size: 30px;
          font-weight: bolder;
        }
        p{
          color: #b0b0b0;
          font-size: 20px
        }
      }
      .cart-content-null-btn{
        margin-top: 20px;
        .btn1{
          border: 1px solid #ff6700;
          color: #fff;
          background-color: #ff6700;
          font-size: 16px;
          width: 170px;
          height: 50px;
          outline: none;
          cursor: pointer;
        }
        .btn2{
          margin-left: 10px;
          border: 1px solid #ff6700;
          color: #ff6700;
          background-color: #fff;
          font-size: 16px;
          width: 170px;
          height: 50px;
          outline: none;
          cursor: pointer;
        }
      }
    }
    .cart-content{
      background-color: #f5f5f5;
      padding-top: 50px;
      padding-bottom: 50px;
      .cart-content-table{
        background-color: #fff;
        color: #424242;
        overflow: hidden;
        .tdnumber{
          width: 170px;
        }
        .tdcheckbox{
          width: 100px;
        }
        .tdsubtotal{
          width: 100px;
          color: #ff6700;
        }
        .tdname{
          img{
            display: inline-block;
            width: 75px;
            height: 90px;
          }
          p{
            display: inline-block;
            vertical-align: top;
            margin-top: 30px;
            margin-left: 20px;
          }
        }
        input{
          zoom: 200%;
        }
        .table-title{
          height: 70px;
          font-size: 14px;
          font-weight: normal;
          span{
            display: inline-block;
            vertical-align: top;
            margin-left: 10px;
          }
        }
        tr{
          border-bottom: 1px solid #e2e2e2;
          td{
            font-size: 18px;
            text-align: center;
            height: 110px;
          }
        }
        .counter{
          border: 1px solid #e2e2e2;
          height: 37px;
          width: 150px;
          margin: 0 auto;
          span{
            display: inline-block;
            margin-top: 5px;
          }
          .btn{
            display: inline-block;
            background-color: #fff;
            border: none;
            width: 37px;
            height: 37px;
            outline: none;
            cursor: pointer;
            &.btna{
              float: left;
            }
            &.btnb{
              float: right;
            }
          }
        }
        .del-icon{
          cursor: pointer;
          font-size: 15px;
          color: #424242;
          &:hover{
            color: #ff6700;
          }
        }
      }
      .cart-content-bottom{
        background-color: #fff;
        margin-top: 20px;
        color: #757575;
        font-size: 14px;
        height: 50px;
        a{
          display: inline-block;
          margin: 10px 0 10px 20px;
          &:hover{
            color: #ff6700;
          }
        }
        span{
          margin: 0 10px;
        }
        p{
          display: inline-block;
          span{
            color: #ff6700;
          }
        }
        .cart-content-bottom-right{
          float: right;
          color: #ff6700;
          h1{
            display: inline-block;
            margin-right: 30px;
            span{
              font-size: 30px;
            }
          }
          .cart-content-bottom-right-btn{
            display: inline-block;
            vertical-align: top;
            height: 50px;
            width: 200px;
            color: #fff;
            background-color: #ff6700;
            border: 1px solid #ff6700;
            cursor: pointer;
            outline: none;
          }
        }
      }
    }
  }
</style>
