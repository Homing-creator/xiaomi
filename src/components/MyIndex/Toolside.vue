<template>
  <div>
    <ul class="page-slider">
      <li class="firstchild">
        <i class="my-icon icon-app"></i>
        <span>手机APP</span>
        <div class="pop">
          <a href="">
            <img src="../../assets/download.png" alt="">
            <p>手机扫一扫<br/>一分赢好礼</p>
          </a>
        </div>
      </li>
      <li>
        <i class="my-icon icon-user"></i>
        <span>个人中心</span>
      </li>
      <li>
        <i class="my-icon icon-service"></i>
        <span>售后服务</span>
      </li>
      <li>
        <i class="my-icon icon-concat"></i>
        <span>人工客服</span>
      </li>
      <li>
        <i class="my-icon icon-car"></i>
        <span>购物车</span>
      </li>
      <li class="last"></li>
      <li>
        <i class="my-icon icon-top"></i>
        <span>回到顶部</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Toolside'
}
</script>

<style scoped lang="scss">
  .page-slider{
    display: block;
    position: fixed;
    right: 0;
    bottom: 70px;
    width: 82px;
    z-index: 100;
    li{
      position: relative;
      height: 92px;
      width: 80px;
      border-bottom: 1px solid #f5f5f5;
      background-color: #fff;
      border-top: 1px solid #fff;
      border-left: 1px solid #f5f5f5;
      cursor: pointer;
      .pop{
        display: none;
        position: absolute;
        top: -10px;
        right: 80px;
        padding: 10px;
        a{
          display: block;
          width: 130px;
          height: 188px;
          background-color: #fff;
          border: 1px solid #f5f5f5;
          border-right: none;
        }
        img{
          width: 95px;
          height: 95px;
          display: block;
          margin: 24px auto;
        }
        p{
          width: 95px;
          margin: 0 auto;
          text-align: center;
        }
      }
      span{
        display: block;
        text-align: center;
        font-size: 14px;
        color: #757575;
        margin-top: 10px;
      }
      .my-icon{
        display: block;
        width: 30px;
        height: 30px;
        background: url("../../assets/side/side-icon.png");
        background-size: 180px 180px;
        margin: 24px auto 0;
      }
      .icon-app{
        background-position: 0 0;
      }
      .icon-user{
        background-position: 0 -30px;
      }
      .icon-service{
        background-position: 0 -60px;
      }
      .icon-concat{
        background-position: 0 -90px;
      }
      .icon-car{
        background-position: 0 -120px;
      }
      .icon-top{
        background-position: 0 -150px;
      }
    }
    li:hover{
      span{
        color: #ff6700;
      }
      .icon-app{
        background-position: -30px 0;
      }
      .icon-user{
        background-position: -30px -30px;
      }
      .icon-service{
        background-position: -30px -60px;
      }
      .icon-concat{
        background-position: -30px -90px;
      }
      .icon-car{
        background-position: -30px -120px;
      }
      .icon-top{
        background-position: -30px -150px;
      }
    }
    .last{
      margin-top: 14px;
      height: 0;
    }
    .firstchild{
      border-top: 1px solid #f5f5f5;
    }
    .firstchild:hover{
      .pop{
        display: block;
      }
    }
  }

</style>
