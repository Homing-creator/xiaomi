<template>
  <div class="container idx-banner" >
    <el-carousel trigger="click" arrow="always" height="460px">
<!--      <el-carousel-item v-for="(item, index) in 5" :key="item">-->
<!--        <a href=""><img :src="imgSrc(index+1)" alt=""></a>-->
<!--      </el-carousel-item>-->
      <el-carousel-item>
        <a href=""><img src="../../assets/banner/1.png" alt=""></a>
      </el-carousel-item>
      <el-carousel-item>
        <a href=""><img src="../../assets/banner/2.png" alt=""></a>
      </el-carousel-item>
      <el-carousel-item>
        <a href=""><img src="../../assets/banner/3.png" alt=""></a>
      </el-carousel-item>
      <el-carousel-item>
        <a href=""><img src="../../assets/banner/4.png" alt=""></a>
      </el-carousel-item>
      <el-carousel-item>
        <a href=""><img src="../../assets/banner/5.png" alt=""></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'IdxBanner',
  computed: {
  },
  methods: {
    imgSrc (index) {
      // window.console.log(`../../assets/banner/${index}.png`)
      return `../../assets/banner/${index}.png`
    }
  }
}
</script>

<style lang="scss">
  .container{
    width: 1206px;
    margin: auto;
  }
  .idx-banner{
    .el-carousel__arrow{
      border: none;
      outline: 0;
      padding: 0;
      margin: 0;
      height: 70px;
      width: 40px;
      cursor: pointer;
      -webkit-transition: .3s;
      transition: .3s;
      border-radius: 0;
      background-color: rgba(31,45,61,.11);
      color: #FFF;
      position: absolute;
      top: 50%;
      z-index: 10;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      text-align: center;
      font-size: 30px;
    }
    .el-carousel__arrow--left{
      left: 234px;
    }
    .el-carousel__arrow--right{
      right: 0;
    }
  /*  el-carousel__indicators el-carousel__indicators--horizontal*/
    .el-carousel__indicators--horizontal{
      bottom: 20px;
      left: 80%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    /*.el-carousel__indicator--horizontal{*/
    /*  display: inline-block;*/
    /*  padding: 0;*/
    /*  margin: 0 5px;*/
    /*}*/
    /*.el-carousel__indicator{*/
    /*  !*background-color: transparent;*!*/
    /*  cursor: pointer;*/
    /*  width: 6px;*/
    /*  height: 6px;*/
    /*  border: 2px solid #fff;*/
    /*  border-color: rgba(255,255,255,0.3);*/
    /*  border-radius: 50%;*/
    /*  background-color: #f5f5f5;*/
    /*  background-color: rgba(0,0,0,0.4);*/
    /*}*/
  }
</style>
