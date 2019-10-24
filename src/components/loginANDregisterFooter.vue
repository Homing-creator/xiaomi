<template>
    <div>
      <div class="login-footer">
        <ul class="footer-list">
          <li v-for="str in footerList" :key="str.index">
            <a href="">{{str}}</a>
          </li>
        </ul>
        <p>
          小米公司版权所有-京ICP备10046444-
          <a href=""><img src="../assets/ghs.png" alt="">京公网安备11010802020134号</a>
          -京ICP证110507号
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'loginANDregisterFooter',
  data () {
    return {
      footerStr: '简体 | 繁体 | English | 常见问题 | 隐私政策'
    }
  },
  computed: {
    footerList () {
      return this.footerStr.split(' ')
    }
  }
}
</script>

<style scoped lang="scss">
  .login-footer{
    margin-top: 100px;
    text-align: center;
    .footer-list{
      li{
        display: inline-block;
        margin: 5px 5px;
        font-size: 14px;
        color: #757575;
        &:hover{
          color: #333;
        }
        &:first-child{
          color: #333;
        }
      }
    }
    p{
      color: #757575;
      font-size: 14px;
    }
  }
</style>
