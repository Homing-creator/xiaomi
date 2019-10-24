<template>
  <div class="nav-bar" :class="navBarFixed === true ? 'isfixed': ''">
    <div class="container">
      <div class="nav-left">
        <a class="active">Redmi 8A</a><span>  |  </span>
        <a href="">Redmi 8</a><span>  |  </span>
        <a href="">Redmi 7A</a>
      </div>
      <div class="nav-right">
        <a href="">概述</a><span>  |  </span>
        <a href="">参数</a><span>  |  </span>
        <a href="">F码通道</a><span>  |  </span>
        <a href="">用户评价</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductNav',
  data () {
    return {
      // titleArr: '概述 参数 F码通道'.split(' ')
      navBarFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScorll)
  },
  methods: {
    handleScorll () {
      this.navBarFixed = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 134 // document.getElementsByClassName('nav-bar')[0].scrollTop
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
  $my-active-color: #424242;//font active color
  $my-color: #616161;//font color
  $my-hover-color: #ff6700;//font hover color
  $my-backgroundcolor: #fff;
  .isfixed{
    position: fixed!important;
    top: 0;
  }
  .nav-bar{
    position: relative;
    z-index: 10;
    height: 63px;
    width: 100%;
    min-width: 1206px;
    margin-top: 0;
    color: $my-color;
    background-color: $my-backgroundcolor;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 5px 5px rgba(0,0,0,.07);
    .container{
      width: 1206px;
      margin: 0 auto;
      a{
        color: $my-color;
        &:hover{
          color: $my-hover-color;
        }
      }
      .nav-left{
        float: left;
        margin: 18px 0;
        /*display: inline-block;*/
        .active{
          font-size: 18px;
          font-weight: 400;
          color: $my-active-color;
          &:hover{
            color: $my-active-color;
          }
        }
      }
      .nav-right{
        float: right;
        margin: 20px 0;
        a{
          font-size: 14px;
        }
      }
    }
  }
</style>
