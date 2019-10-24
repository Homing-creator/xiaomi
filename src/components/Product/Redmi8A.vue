<template>
  <div>
    <div class="mybody">
      <div class="container">
        <div class="pro-view">
          <img :class="{'imgfixed': imgFixed === true, 'imgbottomabsolute': imgBottomAbsolute === true }" :src="Products[0].color[0].imgSrc" alt="">
        </div>
        <div class="pro-info">
          <h2>{{Products[0].name}}</h2>
          <p>{{Products[0].description[0]}}<span>{{Products[0].description[1]}}</span></p>
          <h4>小米自营</h4>
          <h3>{{Products[0].price[0].price-100}}<del>799</del></h3>
          <div class="seckill">
            <div class="seckill-head"><i class="iconfont icon-shandiandianliang"></i>秒杀</div>
            <h3>￥{{Products[0].price[0].price-100}}<del>￥799</del></h3>
          </div>
          <div class="address">
            <i class="iconfont icon-location"></i>
            <span>北京 北京市 东城区 安定门街道</span>
            <a href="">修改</a>
            <p>有现货</p>
          </div>
          <div class="content-box">
            <h2>选择版本</h2>
            <div class="checkbox cbleft ischecked"><span class="name">{{Products[0].price[0].version}}</span><span>{{Products[0].price[0].price-100}}</span></div>
            <div class="checkbox"><span class="name">{{Products[0].price[0].version}}</span><span>{{Products[0].price[0].price-100}}</span></div>
          </div>
          <div class="content-box">
            <h2>选择颜色</h2>
            <div class="checkbox cbleft ischecked"><img :src="Products[0].color[0].imgSrc" alt="">{{Products[0].color[0].name}}</div>
            <div class="checkbox"><img :src="Products[0].color[1].imgSrc" alt="">{{Products[0].color[1].name}}</div>
            <div class="checkbox cbleft"><img :src="Products[0].color[2].imgSrc" alt="">{{Products[0].color[2].name}}</div>
          </div>
          <div class="content-box">
            <h2>选择套餐</h2>
            <div class="checkbox cbleft ischecked">标配</div>
            <div class="checkbox">+29.9元得18W充电器</div>
          </div>
          <div class="content-box">
            <h2>选择小米提供的意外保护</h2>
            <a href="">了解意外保护 ></a>
            <div class="checkboxb cbbleft ischecked"><img src="../../assets/fake/pt1.png" alt=""></div>
            <div class="checkboxb"><img src="../../assets/fake/pt2.png" alt=""></div>
          </div>
          <div class="content-box">
            <h2>选择小米提供的延长保修</h2>
            <a href="">了解延长保修 ></a>
            <div class="checkboxb cbbleft ischecked"><img src="../../assets/fake/pt3.png" alt=""></div>
          </div>
          <div class="pro-list">
            <ul>
              <li>Redmi 8A 4GB+64GB 深海蓝 <span>699元<del>799元</del></span></li>
              <li>意外保障服务<span>99元</span></li>
              <li>延长保修服务<span>29元</span></li>
              <li class="total-price">秒杀价：827元</li>
            </ul>
          </div>
          <div class="my-btn-group">
            <button class="btn1" @click="handleBuy">购买</button>
            <button class="btn2"><i class="iconfont icon-xin"></i>喜欢</button>
          </div>
          <div class="pro-policy">
            <i class="iconfont icon-gouquan"></i><span>小米自营</span>
            <i class="iconfont icon-gouquan"></i><span>小米发货</span>
            <i class="iconfont icon-gouquan"></i><span>7天无理由退货</span>
            <i class="iconfont icon-gouquan"></i><span>运费说明</span>
          </div>
        </div>
        <div class="clearFloat"></div>
      </div>
      <div class="price-info">
        <div class="container p-i">
          <h3>价格说明</h3>
          <div class="pic"><img src="../../assets/fake/jgsm.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from '../../plugins/products/products'
export default {
  name: 'Redmi8A',
  data () {
    return {
      Products,
      imgFixed: false,
      imgBottomAbsolute: false,
      good: {
        isSelect: true,
        id: '10',
        name: 'Redmi 8A',
        price: [
          {
            version: '3GB+32GB',
            price: '699'
          }
        ],
        color: [
          {
            imgSrc: require('../../assets/product/pms_1571387275.0163295.jpg'),
            name: '深海蓝'
          }
        ],
        number: '1'
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScorll)
  },
  methods: {
    handleScorll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.imgFixed = scrollTop > 229 // document.getElementsByClassName('nav-bar')[0].scrollTop
      this.imgBottomAbsolute = scrollTop > 1485
    },
    handleBuy () {
      // this.$emit('buyXiaomi8a', this.good)
      this.$store.commit('addGoods', this.good)
      this.$router.push('/shoppingcart')
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
  .mybody{
    .el-radio-button:last-child .el-radio-button__inner{
      border-radius: 0;
    }
    .el-radio-button__orig-radio:checked+.el-radio-button__inner {
      color: #ff6700;
      background-color: #fff;
      border-color: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }
</style>

<style scoped lang="scss">
  $my-active-color: #212121;//font active color
  $my-color: #b0b0b0;//font color
  $my-hover-color: #ff6700;//font hover color
  $my-backgroundcolor: #fff;
  $my-boder: 1px solid  #e0e0e0;
  .clearFloat{
    clear: both;
  }
  .mybody{
    min-width: 1206px;
    margin-top: 30px;
    .container{
      width: 1206px;
      margin: 0 auto;
      .pro-view{
        display: inline-block;
        position: absolute;
        top: 229px;
        img{
          width: 550px;
        }
        .imgfixed{
          position: fixed;
          top: 0;
        }
        .imgbottomabsolute{
          position: absolute;
          top: 1266px;
        }
      }
      .pro-info{
        float: right;
        width: 600px;
        h2{
          line-height: 1;
          font-size: 24px;
          font-weight: normal;
          color: $my-active-color;
        }
        p{
          margin-top: 10px;
          font-size: 14px;
          color: $my-hover-color;
          span{
            color: $my-color;
          }
        }
        h4{
          margin-top: 10px;
          font-size: 14px;
          color: $my-hover-color;
        }
        h3{
          margin-top: 10px;
          font-size: 18px;
          color: $my-hover-color;
          font-weight: normal;
          del{
            margin-left: 18px;
            font-size: 14px;
            color: $my-color;
          }
        }
        .seckill{
          margin-top: 10px;
          width: 600px;
          height: 90px;
          .seckill-head{
            padding: 10px 20px;
            background-color: $my-hover-color;
            color: #fff;
            height: 20px;
            font-size: 14px;
          }
          h3{
            margin: 0;
            padding: 10px 40px;
            font-size: 24px;
            background-color: #f9f9fa;
          }
        }
        .address{
          margin-top: 40px;
          padding: 30px 50px;
          border: $my-boder;
          background-color: #fafafa;
          font-size: 14px;
          i{margin-right: 10px}
          span{
            margin-right: 10px;
          }
          a{
            color: $my-hover-color;
          }
        }
        .content-box{
          overflow: hidden;
          margin-top: 40px;
          width: 600px;
          h2{
            display: inline-block;
            width: 500px;
          }
          .checkbox{
            margin-top: 20px;
            border: $my-boder;
            width: 294px;
            height: 22px;
            display: inline-block;
            cursor: pointer;
            text-align: center;
            padding: 10px 0;
            font-size: 16px;
            span{
              font-size: 16px;
              color: $my-color;
            }
            .name{
              width: 170px;
              display: inline-block;
              color: $my-active-color;
            }
            img{
              width: 18px;
              height: 18px;
              display: inline-block;
              margin: auto 10px;
            }
          }
          .cbleft{
            margin-right: 8px;
          }
          .checkbox.ischecked, .checkboxb.ischecked{
            border: 1px solid $my-hover-color;
            .name{
              color: $my-hover-color;
            }
          }
          a{
            color: $my-hover-color;
            font-size: 14px;
            display: inline;
          }
          .checkboxb{
            background-color: #fff;
            border: $my-boder;
            width: 598px;
            height: 80px;
            overflow: hidden;
            padding: 30px 0;
          }
          .checkboxb.cbbleft{
            margin-top: 20px;
          }
        }
        .pro-list{
          width: 540px;
          overflow: hidden;
          padding: 30px 30px;
          background-color: #f9f9fa;
          margin-top: 40px;
          li{
            font-size: 14px;
            color: #616161;
            line-height: 30px;
            span{
              float: right;
            }
          }
          .total-price{
            margin-top: 10px;
            color: $my-hover-color;
            font-size: 20px;
            font-weight: 600;
            font-family: "Microsoft YaHei";
          }
        }
        .my-btn-group{
          margin-top: 40px;
          .btn1{
            width: 300px;
            height: 54px;
            overflow: hidden;
            background-color: $my-hover-color;
            border: none;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
            outline: none;
            &:hover{
              background-color: #ff4e00;
            }
          }
          .btn2{
            margin-left: 20px;
            cursor: pointer;
            width: 140px;
            height: 54px;
            font-size: 18px;
            background-color: #b0b0b0;
            border: none;
            color: #fff;
            outline: none;
            &:hover{
              background-color: #757575;
            }
          }
        }
        .pro-policy{
          padding: 20px 0;
          color: #b0b0b0;
          font-size: 14px;
          span{
            padding: 0 10px;
          }
        }
      }
    }
    .price-info{
      padding-bottom: 50px;
      background-color: #f5f5f5;
      .container.p-i{
        h3{
          padding: 20px 0;
          font-size: 22px;
          font-weight: normal;
        }
        .pic{
          width: 1200px;
          height: 189px;
          background-color: #fff;
          text-align: center;
          img{
            margin-top: 45px;
          }
        }
      }
    }
  }
</style>
