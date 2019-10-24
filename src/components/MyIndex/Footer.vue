<template>
  <div class="page-footer">
      <div class="container">
        <ul class="ts">
          <li><a href=""><i class="iconfont icon-weixiu"></i>预约维修服务</a></li>
          <li><a href=""><i class="iconfont icon-sevenday"></i>7天无理由退货</a></li>
          <li><a href=""><i class="iconfont icon-tian"></i>15天免费换货</a></li>
          <li><a href=""><i class="iconfont icon-liwu"></i>满150包邮</a></li>
          <li class="last"><a href=""><i class="iconfont icon-location"></i>520余家售后网点</a></li>
        </ul>
        <div class="nav">
          <div class="lt">
            <dl>
              <dt>帮助中心</dt>
              <dd><a href="">账户管理</a></dd>
              <dd><a href="">购物指南</a></dd>
              <dd><a href="">订单操作</a></dd>
            </dl>
            <dl>
              <dt>服务支持</dt>
              <dd><a href="">售后政策</a></dd>
              <dd><a href="">自助服务</a></dd>
              <dd><a href="">相关下载</a></dd>
            </dl>
            <dl>
              <dt>线下门店</dt>
              <dd><a href="">小米之家</a></dd>
              <dd><a href="">服务网点</a></dd>
              <dd><a href="">授权体验店</a></dd>
            </dl>
            <dl>
              <dt>关于小米</dt>
              <dd><a href="">了解小米</a></dd>
              <dd><a href="">加入小米</a></dd>
              <dd><a href="">投资者关系</a></dd>
            </dl>
            <dl>
              <dt>关注我们</dt>
              <dd><a href="">新浪微博</a></dd>
              <dd><a href="">官方微信</a></dd>
              <dd><a href="">联系我们</a></dd>
            </dl>
            <dl>
              <dt>特色服务</dt>
              <dd><a href="">F 码通道</a></dd>
              <dd><a href="">礼物码</a></dd>
              <dd><a href="">防伪查询</a></dd>
            </dl>
          </div>
          <div class="gt">
            <h3>400-100-5678</h3>
            <h4>周一至周日 8:00-18:00</h4>
            <p>（仅收市话费）</p>
            <a href="" class="concat"><i class="iconfont icon-msg"></i>联系客服</a>
          </div>
        </div>
      </div>
      <div class="bot">
        <div class="container">
          <div class="logo"></div>
          <div class="txt">
            <h3 class="list">
              <a href="">小米商城</a><span>|</span>
              <a href="">MIUI</a><span>|</span>
              <a href="">米家</a><span>|</span>
              <a href="">米聊</a><span>|</span>
              <a href="">多看</a><span>|</span>
              <a href="">游戏</a><span>|</span>
              <a href="">路由器</a><span>|</span>
              <a href="">米粉卡</a><span>|</span>
              <a href="">政企服务</a><span>|</span>
              <a href="">小米天猫店</a><span>|</span>
              <a href="">小米集团隐私政策</a><span>|</span>
              <a href="">小米商城隐私政策</a><span>|</span>
              <a href="">小米商城用户协议</a><span>|</span>
              <a href="">问题反馈</a><span>|</span>
              <a href="">廉正举报</a><span>|</span>
              <a href="">诚信合规</a><span>|</span>
              <a href="">Select Location</a>
            </h3>
            <p>
              <a href="">© mi.com</a>
              京ICP证110507号
              <a href="">京ICP备10046444号</a>
              <a href="">京公网安备11010802020134号</a>
              <a href="">京网文[2017]1530-131号</a>
            </p>
            <p>
              <a href="">（京）网械平台备字（2018）第00005号</a>
              <a href="">互联网药品信息服务资格证 (京) -非经营性-2014-0090</a>
              <a href="">营业执照</a>
              <a href="">医疗器械公告</a>
            </p>
            <p>
              <a href="">增值电信业务许可证</a>
              网络食品经营备案（京）【2018】WLSPJYBAHF-12
              <a href="">食品经营许可证</a>
            </p>
            <p>
              违法和不良信息举报电话：185-0130-1238 <a href="">知识产权侵权投诉</a> 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
            </p>
            <ul>
              <li><a href=""><img src="../../assets/foot/truste.png" alt=""></a></li>
              <li><a href=""><img src="../../assets/foot/v-logo-1.png" alt=""></a></li>
              <li><a href=""><img src="../../assets/foot/v-logo-2.png" alt=""></a></li>
              <li><a href=""><img src="../../assets/foot/v-logo-3.png" alt=""></a></li>
              <li><a href=""><img src="../../assets/foot/ba10428a4f9495ac310fd0b5e0cf8370.png" alt=""></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  .container{
    width: 1206px;
    margin: 0 auto;
  }
  .page-footer{
    .ts{
      overflow: hidden;
      margin: 30px auto;
      li{
        width: 240px;
        border-right: 1px solid #e0e0e0;
        line-height: 25px;
        float: left;
        font-size: 16px;
        text-align: center;
        color: #616161;
        i{
          margin-right: 5px;
          font-size: 22px;
        }
        a:hover{
          color: #ff6700;
        }
      }
      .last{
        border: none;
      }
    }
    .nav{
      border-top: 1px solid #e0e0e0;
      padding-top: 40px;
      overflow: hidden;
      .lt{
        float: left;
        width: 964px;
        overflow: hidden;
        border-right: 1px solid #e0e0e0;
        dl{
          width: 160px;
          float: left;
          dt{
            color: #424242;
            font-size: 14px;
            line-height: 40px;
          }
          dd{
            color: #757575;
            line-height: 30px;
          }
          dd:hover{
            color: #ff6700;
          }
        }
      }
      .gt{
        width: 240px;
        float: right;
        text-align: center;
        h3{
          font-weight: normal;
          color: #ff6700;
          font-size: 22px;
        }
        h4{
          font-size: 12px;
          font-weight: normal;
          color: #757575;
          line-height: 30px;
        }
        p{
          color: #757575;
        }
        .concat{
          display: block;
          width: 128px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          border: 1px solid #ff6700;
          color: #ff6700;
          margin: 20px auto;
          i{
            margin-right: 3px;
          }
        }
        .concat:hover{
          color: #fff;
          background-color: #ff6700;
        }
      }
    }
    .bot{
      height: 230px;
      padding-top: 30px;
      margin-top: 40px;
      overflow: hidden;
      background: #fafafa url("../../assets/foot/mi.png") center 190px no-repeat;
      .logo{
        display: block;
        float: left;
        width: 54px;
        height: 54px;
        background: #ff6700 url("../../assets/xiaomilogo.png") center center no-repeat;
        background-size: 34px 34px;
      }
      .txt{
        width: 1142px;
        float: right;
        h3{
          font-weight: normal;
          color: #757575;
          line-height: 20px;
          span{
            margin: 0 4px;
            color: #e0e0e0;
          }
          a:hover{
            color: #ff6700;
          }
        }

        p{
          color: #b0b0b0;
          line-height: 18px;
          a{
            margin: 0 3px;
          }
          a:hover{
            color: #ff6700;
          }
        }
        ul{
          overflow: hidden;
          margin-top: 8px;
          li,li img{
            width: 84px;
            height: 28px;
            display: block;
          }
          li{
            float: left;
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
