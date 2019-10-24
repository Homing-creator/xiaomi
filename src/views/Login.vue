<template>
    <div>
      <div class="login-header">
        <div class="container lh-content">
          <router-link to="/home" class="logo"><img src="../assets/fake/loginnavlogo.png" alt=""></router-link>
        </div>
      </div>
      <div class="login-content">
        <router-link to="">
          <img src="../assets/banner/2.png" alt="">
        </router-link>
        <el-tabs v-model="activeName" type="card" class="login-content-tabs">
          <el-tab-pane label="账号登录" name="first" class="tabs-pane tp-first">
            <form action="">
              <input type="text" placeholder="邮箱/手机号码/小米ID" />
              <input type="text" placeholder="密码" />
            </form>
            <button class="tabs-btn">登录</button>
            <div class="tabs-register">
              <a href="" class="tabs-register-left">手机短信登录/注册</a>
              <div class="tabs-register-right">
                <a href="">立即注册</a>
                <span>|</span>
                <a href="">忘记密码？</a>
              </div>
            </div>
            <fieldset class="otherways">
              <legend>其他方式登录</legend>
            </fieldset>
            <div class="login-icon">
              <a href=""><i class="iconfont icon-qq"></i></a>
              <a href=""><i class="iconfont icon-weibo"></i></a>
              <a href=""><i class="iconfont icon-zhifubao"></i></a>
              <a href=""><i class="iconfont icon-weixin"></i></a>
            </div>
          </el-tab-pane>
          <el-tab-pane label="扫码登录" name="second" class="tabs-pane tp-second">
            <img src="../assets/fake/login.png" alt="">
            <p>使用<span>小米商城APP</span>扫一扫</p>
            <p>小米手机可打开「设置」>「小米帐号」扫码登录</p>
          </el-tab-pane>
        </el-tabs>
      </div>
      <loginANDregisterFooter></loginANDregisterFooter>
    </div>
</template>

<script>
import loginANDregisterFooter from '../components/loginANDregisterFooter'
export default {
  name: 'Login',
  components: {
    loginANDregisterFooter
  },
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style lang="scss">
  .login-content{
    .el-tabs--card>.el-tabs__header{
      border: none;
      padding: 20px 40px;
      margin: 0;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav{
      border: none;
      margin-left: 20px;
    }
    .el-tabs__item{
      font-size: 24px;
      font-weight: 600;
      color: #757575;
      /*padding: 0 20px;*/
      &:hover{
        color: #ff6700;
      }
    }
    .el-tabs__item.is-active{
      color: #ff6700;
    }
  }
</style>
<style scoped lang="scss">
.login-header{
  .container{
    width: 1206px;
    margin: 0 auto;
  }
  .container.lh-content{
    height: 78px;
    padding-top: 20px;
    .logo{
    }
  }
}
.login-content{
  position: relative;
  a{
    img{
      width: 100%;
      min-width: 1400px;
      height: 580px;
    }
  }
  .login-content-tabs{
    position: absolute;
    top: 10%;
    left: 60%;
    background-color: #fff;
    height: 500px;
    width: 400px;
    .tabs-pane{
      padding: 0 25px;
    }
    .tabs-pane.tp-first{
      input{
        width: 330px;
        height: 45px;
        font-size: 18px;
        line-height: 16px;
        overflow: hidden;
        padding: 0 8px;
        outline:none;
        margin-top: 10px;
        border: 1px solid #b0b0b0;
      }
      .tabs-btn{
        margin-top: 20px;
        width: 348px;
        height: 47px;
        border: 1px solid #ff6700;
        color: white;
        background-color: #ff6700;
        font-size: 16px;
        cursor: pointer;
        outline: none;
      }
      .tabs-register{
        margin-top: 10px;
        .tabs-register-left{
          color: #ff6700;
        }
        .tabs-register-right{
          float: right;
          color: #757575;
          span{
            margin: 0 10px;
          }
        }
      }
      .otherways{
        margin-top: 100px;
        border-top: 1px solid #b0b0b0;
        legend{
          text-align: center;
          color: #757575;
        }
      }
      .login-icon{
        text-align: center;
        a{
          margin: 10px 15px;
          i{
            font-size: 30px;
          }
          .icon-qq{
            color: #0086b3;
          }
          .icon-zhifubao{
            color: #0077aa;
          }
          .icon-weibo{
            color: #bd2c00;
          }
          .icon-weixin{
            color: #55a532;
          }
        }
      }
    }
    .tabs-pane.tp-second{
      text-align: center;
      img{
        margin-top: 100px;
        width: 185px;
        height: 185px;
      }
      p{
        margin-top: 5px;
        font-size: 12px;
        color: #757575;
        span{
          margin: 0 5px;
          color: #ff6700;
        }
      }
    }
  }
}
</style>
